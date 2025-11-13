import { subjectService } from "../subject/index.js";
import { tFinishedService } from "../topic-finished/index.js";
import { TopicController } from "./topic.controller.js";
import { TopicRepository } from "./topic.repository.js";
import { TopicService } from "./topic.service.js";

const topicRepo = new TopicRepository();
const topicService = new TopicService(topicRepo, subjectService, tFinishedService);
const topicController = new TopicController(topicService);

export {
  topicRepo,
  topicService,
  topicController,
};