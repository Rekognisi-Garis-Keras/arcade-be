import { QuizResultResponseDTO } from "./dto/quiz-result-response.dto.js";
import { v7 as uuid } from "uuid";

export class QuizResultService {
  constructor(
    quizResultRepo, 
    quizAnswerService, 
    topicService, 
    uXpService,
    tFinishedService,
  ) {
    this.quizResultRepo = quizResultRepo;
    this.quizAnswerService = quizAnswerService;
    this.topicService = topicService;
    this.uXpService = uXpService;
    this.tFinishedService = tFinishedService;
  }

  async createResult(data) {
    // find topic by topic slug
    const topic = await this.topicService.getTopicByTopicSlug(data.top_slug);
    if (!topic) {
      return null;
    }
    const quizzes = topic.quizzes;

    // validate
    const userAnswers = data.answers;
    if (quizzes.length !== userAnswers.length) {
      throw new Error("All quiz must be filled");
    }

    // answer & correct checking
    let correctCount = 0;
    let xp = 0;
    const resultDetails = [];
    for (const q of quizzes) {
      const userAnswer = userAnswers.find(a => a.quiz_id === q.id)?.answer;

      const isCorrect = userAnswer == q.correct_answer;
      if (isCorrect) {
        correctCount++;
        xp += 10; // XP +10
      };

      resultDetails.push({
        answer: userAnswer,
        is_correct: isCorrect,
        // correct_answer: isCorrect ? null : q.correct_answer,
      });
    }
    
    // create quiz result data
    const quizResultData = {
      uuid: uuid(),
      topic_id: topic.id,
      user_id: data.user_id,
      xp,
    };

    // exec
    const [newResult, ,] = await Promise.all([
      this.quizResultRepo.create(quizResultData),
      this.uXpService.createOrUpdate(data.user_id, xp),
      this.topicService.updateTopic(topic.slug),
    ]);
  
    await this.quizAnswerService.createAnswers(newResult.id, resultDetails);
    await this.tFinishedService.finish(data.user_id, topic.id);  

    const details = quizzes.map((quiz, idx) => {
      return {
        ...quiz,
        user_answer: resultDetails[idx].answer,
        is_correct: resultDetails[idx].is_correct,
      };
    });

    return {
      result: new QuizResultResponseDTO(newResult),
      details,
    };
  }
}