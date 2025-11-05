import { ResponseUtil } from "../utils/response.util.js";

export class UserXpController {
  constructor(uXpService) {
    this.uXpService = uXpService;
  } 

  getByUser = async (req, res, next) => {
    try {
      const userId = req.user.id;
      const userXp = await this.uXpService.getByUser(userId);
      return ResponseUtil.success(res, 200, "List of User XP", userXp);
    } catch (err) {
      next(err);
    }
  }

  getLeaderboard = async (req, res, next) => {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const userId = req.user.id;
      const leaderboard = await this.uXpService.getLeaderboard(userId, {
        limit: Number(limit),
        offset: Number(offset)
      });
      return ResponseUtil.success(res, 200, "List of Leaderboard", leaderboard);
    } catch (err) {
      next(err);
    }
  }
}