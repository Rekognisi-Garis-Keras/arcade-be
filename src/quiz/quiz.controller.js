import { ResponseUtil } from "../utils/response.util.js";
import { quizCreateSchema, quizUpdateSchema } from "./dto/quiz-request.dto.js";

export class QuizController {
  constructor(quizService) {
    this.quizService = quizService;
  }
  
  create = async (req, res) => {
    try {
      const { topSlug } = req.params;
      const { error, value } = quizCreateSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }
      const quiz = await this.quizService.createQuiz(topSlug, value);
      if (!quiz) {
        return ResponseUtil.error(res, 404, "Topic not found, quiz not created");
      }
      ResponseUtil.success(res, 201, "quiz created successfuly", quiz);
    } catch (error) {
      console.error(error);
      ResponseUtil.error(res, 500, "failed to create quiz");
    }
  }

  getAll = async (req, res) => {
    try {
      const quizzes = await this.quizService.getAllQuizzes();
      ResponseUtil.success(res, 200, "quizzes fetched successfully", quizzes);
    } catch (error) {
      console.error(error);
      ResponseUtil.error(res, 500, "failed to fetch quizzes");
    }
  }

  getByTopic = async (req, res) => {
    try {
      const { topSlug } = req.params;
      const quizzes = await this.quizService.getQuizByTopic(topSlug);
      ResponseUtil.success(res, 200, "quizzes fetched successfully", quizzes);
    } catch (error) {
      console.error(error);
      ResponseUtil.error(res, 500, "failed to fetch quizzes");
    }
  }

  getByUuid = async (req, res) => {
    try {
      const { uuid } = req.params;
      const quiz = await this.quizService.getQuizByUuid(uuid);
      if (!quiz) {
        return ResponseUtil.error(res, 404, "Quiz not found");
      }
      ResponseUtil.success(res, 200, "quiz fetched successfully", quiz);
    } catch (error) {
      console.error(error);
      ResponseUtil.error(res, 500, "failed to fetch quiz");
    }
  }

  update = async (req, res) => {
    try {
      const { uuid } = req.params;
      const { error, value } = quizUpdateSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }
      const updatedQuiz = await this.quizService.updateQuiz(uuid, value);
      ResponseUtil.success(res, 200, "quiz updated successfully", updatedQuiz);
    } catch (error) {
      if (error.message === "Quiz not found") {
        return ResponseUtil.error(res, 404, "Quiz not found");
      }
      console.error(error);
      ResponseUtil.error(res, 500, "failed to update quiz");
    }
  }

  delete = async (req, res) => {
    try {
      const { uuid } = req.params;
      const deletedQuiz = await this.quizService.deleteQuiz(uuid);
      ResponseUtil.success(res, 200, "quiz deleted successfully", deletedQuiz);
    } catch (error) {
      if (error.message === "Quiz not found") {
        return ResponseUtil.error(res, 404, "Quiz not found");
      }
      console.error(error);
      ResponseUtil.error(res, 500, "failed to delete quiz");
    }
  }
}
