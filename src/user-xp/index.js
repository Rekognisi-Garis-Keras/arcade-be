import { UserXpController } from "./user-xp.controller.js";
import { UserXpRepository } from "./user-xp.repo.js";
import { UserXpService } from "./user-xp.service.js";

const uXpRepo = new UserXpRepository();
const uXpService = new UserXpService(uXpRepo);
const uXpController = new UserXpController(uXpService);

export {
  uXpRepo,
  uXpService,
  uXpController,
};