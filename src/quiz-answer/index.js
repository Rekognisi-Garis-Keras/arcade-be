import { QuizAnswerRepository } from "./quiz-answer.repository.js";
import { QuizAnswerService } from "./quiz-answer.service.js";

const quizAnswerRepo = new QuizAnswerRepository();
const quizAnswerService = new QuizAnswerService(quizAnswerRepo);

export {
  quizAnswerRepo,
  quizAnswerService,
}