import { NotFoundError } from "../utils/error.util";
import { UserXpResponse } from "./dto/user-xp-response.dto";

export class UserXpService {
  constructor(uXpRepo) {
    this.uXpRepo = uXpRepo;
  }

  async create(data) {
    const uXp = await this.uXpRepo.create(data);
    return new UserXpResponse(uXp);
  }

  async getAll() {
    const uXps = await this.uXpRepo.findAll();
    return uXps.map(uXp => new UserXpResponse(uXp));
  }

  async getByUserId(userId) {
    const uXp = await this.uXpRepo.findByUserId(userId);
    if (!uXp) return null;
    return new UserXpResponse(uXp);
  }

  async addXp(userId, xp) {
    const uXp = await this.uXpRepo.findByUserId(userId);
    if (!uXp) throw new NotFoundError("User XP record not found");

    const updated = await this.uXpRepo.update(userId, {
      xp: uXp.xp + xp
    });

    return new UserXpResponse(updated);
  }
}