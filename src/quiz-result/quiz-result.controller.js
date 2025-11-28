import { ResponseUtil } from "../utils/response.util.js";
import { quizSubmitSchema } from "./dto/quiz-result-request.dto.js";

export class QuizResultController {
  constructor(qResultService) {
    this.qResultService = qResultService;
  }

  submit = async (req, res) => {
    try {
      const user = req.user;
      const { topSlug } = req.params;
      const newResult = {
        ...req.body,
        user_id: user.id,
        top_slug: topSlug,
      };
      // validate
      const { error, value } = quizSubmitSchema.validate(newResult);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }
      const result = await this.qResultService.createResult(value);
      ResponseUtil.success(res, 201, "result created successfuly", result);
    } catch (error) {
      console.error(error);
      ResponseUtil.error(res, 500, "failed to create quiz result");
    }
  }

  getResult = async (req, res) => {
    try {
      const user = req.user;
      const results = await this.qResultService.getUserResults(user);
      ResponseUtil.success(res, 200, "user quiz results fetched successfully", results);
    } catch (error) {
      console.error(error);
      ResponseUtil.error(res, 500, "failed to get user's quiz result")
    }
  }

  getResultDetail = async (req, res) => {
    try {
      const { uuid } = req.params;
      const result = await this.qResultService.getResultDetail(uuid);
      
      if (!result) {
        return ResponseUtil.notFound(res, "Quiz result not found");
      }

      ResponseUtil.success(res, 200, "quiz result detail fetched successfully", result);
    } catch (error) {
      console.error(error);
      ResponseUtil.error(res, 500, "failed to get quiz result detail");
    }
  }
}