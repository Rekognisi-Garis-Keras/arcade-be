import { ResponseUtil } from "../utils/response.util.js";
import { topicCreateSchema, topicUpdateSchema } from "./dto/topic-request.dto.js";

export class TopicController {
  constructor(topicService) {
    this.topicService = topicService;
  }

  create = async (req, res, next) => {
    try {
      const icon = req.file;
      if (!icon) {
        return ResponseUtil.error(res, 400, "Icon file is required");
      }
      const { subSlug } = req.params;
      const topic = await this.topicService.createTopic(subSlug, req.body, icon);
      return ResponseUtil.success(res, 201, "Topic created successfully", topic);
    } catch (error) {
      next(error);
    }
  }

  getAll = async (req, res, next) => {
    try {
      const topics = await this.topicService.getAllTopics();
      return ResponseUtil.success(res, 200, "Topics retrieved successfully", topics);
    } catch (error) {
      next(error);
    }
  }

  getByTopicSlug = async (req, res, next) => {
    try {
      const { topSlug } = req.params;
      const user = req.user;
      const topic = await this.topicService.getTopicByTopicSlug(topSlug, user.id);
      return ResponseUtil.success(res, 200, "Topic retrieved successfully", topic);
    } catch (error) {
      next(error);
    }
  }
  
  getBySubjectSlug = async (req, res, next) => {
    try {
      const { subSlug } = req.params;
      const topics = await this.topicService.getTopicBySubjectSlug(subSlug);
      return ResponseUtil.success(res, 200, "Topic retrieved successfully", topics);
    } catch (error) {
      next(error);
    }
  }

  update = async (req, res, next) => {
    try {
      const { topSlug } = req.params;
      const iconFile = req.file;
      const updatedTopic = await this.topicService.updateTopic(
        topSlug,
        req.body,
        { icon: iconFile }
      );
      return ResponseUtil.success(res, 200, "Topic updated successfully", updatedTopic);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req, res, next) => {
    try {
      const { topSlug } = req.params;
      await this.topicService.deleteTopic(topSlug);
      return ResponseUtil.success(res, 200, "Topic deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}