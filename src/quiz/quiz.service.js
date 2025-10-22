import { QuizResponseDTO } from "./dto/quiz-response.dto.js";
import { v7 as uuid } from "uuid"; 

export class QuizService {
  constructor(quizRepo, topicService) {
    this.quizRepo = quizRepo;
    this.topicService = topicService;
  }

  async createQuiz(topSlug, data) {
    // generate uuid
    const quizUuid = uuid();
    // get topic_id from topSlug
    const topic = await this.topicService.getTopicByTopicSlug(topSlug);
    if (!topic) {
      return null;
    }
    // create
    const newQuiz = { 
      ...data,
      uuid: quizUuid,
      topic_id: topic.id,
    }
    const quiz = await this.quizRepo.create(newQuiz);
    return new QuizResponseDTO(quiz);
  }

  async getQuizByTopic(topSlug) {
    const quizzes = await this.quizRepo.findByTopic(topSlug);
    return quizzes.map(q => new QuizResponseDTO(q));
  }

  async getQuizByUuid(uuid) {
    const quiz = await this.quizRepo.findByUuid(uuid);
    return quiz ? new QuizResponseDTO(quiz) : null;
  }

  async updateQuiz(uuid, data) {
    const quiz = await this.quizRepo.findByUuid(uuid);
    if (!quiz) {
      throw new Error("Quiz not found");
    }
    const updatedQuiz = await this.quizRepo.update(quiz.id, data);
    return new QuizResponseDTO(updatedQuiz);
  }

  async deleteQuiz(uuid) {
    const quiz = await this.quizRepo.findByUuid(uuid);
    if (!quiz) {
      throw new Error("Quiz not found");
    }
    const deletedQuiz = await this.quizRepo.delete(quiz.id);
    return new QuizResponseDTO(deletedQuiz);
  }
}