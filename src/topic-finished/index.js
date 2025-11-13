import { TFinishedController } from "./topic-finished.controller.js";
import { TFinishedRepo } from "./topic-finished.repository.js";
import { TFinishedService } from "./topic-finished.service.js";

const tFinishedRepo = new TFinishedRepo();
const tFinishedService = new TFinishedService(tFinishedRepo);
const tFinishedController = new TFinishedController(tFinishedService);

export {
  tFinishedController,
  tFinishedRepo,
  tFinishedService,
};