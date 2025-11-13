import { ResponseUtil } from "../utils/response.util.js";

export class TFinishedController {
  constructor(tFinishedService) {
    this.tFinishedService = tFinishedService;
  }

  getByUser = async (req, res, next) => {
    try {
      const { finish } = req.query;
      const user = req.user;
      const query = {
        finish,
      };
      const topicFinished = await this.tFinishedService.findByUser(user.id, query);
      return ResponseUtil.success(res, 200, "Fetch Topic Finished", topicFinished)
    } catch (error) {
      next(error);
    }
  }
}