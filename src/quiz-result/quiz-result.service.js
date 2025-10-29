import { QuizAnswerResponseDTO } from "../quiz-answer/dto/quiz-answer-response.dto.js";
import { QuizResultResponseDTO } from "./dto/quiz-result-response.dto.js";
import { v7 as uuid } from "uuid";

export class QuizResultService {
  constructor(quizResultRepo, quizAnswerService, topicService) {
    this.quizResultRepo = quizResultRepo;
    this.quizAnswerService = quizAnswerService;
    this.topicService = topicService;
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
    const resultDetails = [];
    for (const q of quizzes) {
      const userAnswer = userAnswers.find(a => a.quiz_id === q.id)?.answer;

      const isCorrect = userAnswer == q.correct_answer;
      if (isCorrect) correctCount++;

      resultDetails.push({
        answer: userAnswer,
        is_correct: isCorrect,
        // correct_answer: isCorrect ? null : q.correct_answer,
      });
    }
    // score calculating
    const score = Math.floor(correctCount / quizzes.length * 100);

    // create quiz result data
    const quizResultData = {
      topic_id: topic.id,
      user_id: data.user_id,
      score: score,
      uuid: uuid()
    };

    // create
    const newResult = await this.quizResultRepo.create(quizResultData);
    const newAnswers = await this.quizAnswerService.createAnswers(newResult.id, resultDetails);

    const details = quizzes.map((quiz, idx) => {
      return {
        ...quiz,
        user_answer: resultDetails[idx].answer,
        is_correct: resultDetails[idx].is_correct,
      };
    });

    return {
      result: new QuizResultResponseDTO(newResult),
      details: details
    };
  }
}