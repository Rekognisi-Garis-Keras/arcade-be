import { quizAnswerService } from "../quiz-answer/index.js";
import { topicService } from "../topic/index.js";
import { uXpService } from "../user-xp/index.js";
import { tFinishedService } from "../topic-finished/index.js";
import { QuizResultController } from "./quiz-result.controller.js";
import { QuizResultRepository } from "./quiz-result.repository.js";
import { QuizResultService } from "./quiz-result.service.js";

const quizResultRepo = new QuizResultRepository();
const quizResultService = new QuizResultService(
  quizResultRepo, 
  quizAnswerService, 
  topicService, 
  uXpService,
  tFinishedService,
);
const quizResultController = new QuizResultController(quizResultService);

export {
  quizResultRepo,
  quizResultService,
  quizResultController,
}
