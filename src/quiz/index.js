import { topicService } from "../topic/index.js";
import { QuizController } from "./quiz.controller.js";
import { QuizRepository } from "./quiz.repository.js";
import { QuizService } from "./quiz.service.js";

const quizRepo = new QuizRepository();
const quizService = new QuizService(quizRepo, topicService);
const quizController = new QuizController(quizService);

export {
  quizRepo,
  quizService,
  quizController,
};