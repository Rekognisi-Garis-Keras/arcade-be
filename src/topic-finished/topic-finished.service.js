import { ValidationError } from "../utils/error.util.js";
import { createTFinishedSchema } from "./dto/topic-finished-request.dto.js";
import { TFinishedResponseDTO } from "./dto/topic-finished-response.dto.js";

export class TFinishedService {
  constructor(tFinishedRepo) {
    this.tFinishedRepo = tFinishedRepo;
  }

  async create(data) {
    const { error, value } = createTFinishedSchema.validate(data);
    if (error) {
      throw new ValidationError(error.details[0]?.message, error.details);
    }
    return await this.tFinishedRepo.create(value);
  }

  async findByUser(userId, query = {}) {
    const results = await this.tFinishedRepo.findByUserId(userId, query);
    return results.map(item => new TFinishedResponseDTO(item));
  }

  async findByUserAndTopic(userId, topicId) {
    return await this.tFinishedRepo.findByUserAndTopic(userId, topicId);
  }

  async finish(userId, topicId) {
    const data = { 
      finished: true,
      finished_at: new Date()
    };
    return await this.tFinishedRepo.update(userId, topicId, data);
  }
}