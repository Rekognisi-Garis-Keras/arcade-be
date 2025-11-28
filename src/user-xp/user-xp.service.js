import { UserXpResponse } from "./dto/user-xp-response.dto.js";

export class UserXpService {
  constructor(uXpRepo) {
    this.uXpRepo = uXpRepo;
  }

  async getLeaderboard(userId, filter = {}) {
    const uXps = await this.uXpRepo.findMany(filter);
    let userXp = await this.uXpRepo.findByUserId(userId);
    if (!userXp) {
      userXp = await this.uXpRepo.create(userId, { xp: 0 });
    }

    // get user rank
    const userRank = await this.uXpRepo.getUserRank(userId);
    // const topLeaderboard = uXps.map((uXp, index) => new UserXpResponse(uXp, (filter.offset || 0) + index + 1));
    const topLeaderboard = await Promise.all(
      uXps.map(async (uXp) => {
        const rank = await this.uXpRepo.getUserRank(uXp.user_id);
        return new UserXpResponse(uXp, rank);
      })
    );    
    const isInLeaderboard = topLeaderboard.some(item => item.user_id === userId);
    const result = { 
      "top_leaderboard": topLeaderboard,
    };
    result["my_position"] = new UserXpResponse(userXp, userRank);
    return result;
  }

  async getByUserId(userId) {
    let uXp = await this.uXpRepo.findByUserId(userId);
    if (!uXp) {
      uXp = await this.uXpRepo.create(userId, { xp: 0 });
    }
    return new UserXpResponse(uXp);
  }

  async create(userId, xp = 0) {
    const uXp = await this.uXpRepo.create(userId, { xp });
    return new UserXpResponse(uXp);
  }

  async createOrUpdate(userId, xp) {
    const existingUXP = await this.uXpRepo.findByUserId(userId);
    let uXp;

    if (existingUXP) {
      const newXp = existingUXP.xp + (xp || 0);
      uXp = await this.uXpRepo.update(userId, { ...existingUXP, xp: newXp });
    } else {
      uXp = await this.uXpRepo.create(userId, { xp: xp || 0 });
    }

    return new UserXpResponse(uXp);
  }
}