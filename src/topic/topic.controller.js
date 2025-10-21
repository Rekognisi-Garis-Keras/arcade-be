import { ResponseUtil } from "../utils/response.util.js";
import { topicCreateSchema, topicUpdateSchema } from "./dto/topic-request.dto.js";

export class TopicController {
  constructor(topicService) {
    this.topicService = topicService;
  }

  create = async (req, res) => {
    try {
      const { subSlug } = req.params;
      const { error, value } = topicCreateSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details)
      }
      const topic = await this.topicService.createTopic(subSlug, value);
      ResponseUtil.success(res, 201, "Topic created successfuly", topic);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to create topic", error.message);
    }
  }

  getByTopicSlug = async (req, res) => {
    try {
      const { topSlug } = req.params;
      const topic = await this.topicService.getTopicByTopicSlug(topSlug);
      if (!topic) {
        return ResponseUtil.notFound(res, "Topic not found");
      }
      return ResponseUtil.success(res, 200, "Topic retrieved successfully", topic);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to retrieve topic", error.message);
    }
  }
  
  getBySubjectSlug = async (req, res) => {
    try {
      const { subSlug } = req.params;
      const topics = await this.topicService.getTopicBySubjectSlug(subSlug);
      if (!topics) {
        return ResponseUtil.notFound(res, "Topic not found");
      }
      return ResponseUtil.success(res, 200, "Topic retrieved successfully", topics);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to retrieve topic", error.message);
    }
  }

  update = async (req, res) => {
    try {
      const { topSlug } = req.params;
      const topic = await this.topicService.getTopicByTopicSlug(topSlug);
      if (!topic) {
        return ResponseUtil.notFound(res, "Topic not found");
      }
      const { error, value } = topicUpdateSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }
      const updatedTopic = await this.topicService.updateTopic(topSlug, value);
      return ResponseUtil.success(res, 200, "Topic updated successfully", updatedTopic);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to update topic", error.message);
    }
  }

  delete = async (req, res) => {
    try {
      const { topSlug } = req.params;
      const topic = await this.topicService.getTopicByTopicSlug(topSlug);
      if (!topic) {
        return ResponseUtil.notFound(res, "Topic not found");
      }
      await this.topicService.deleteTopic(topSlug);
      return ResponseUtil.success(res, 200, "Topic deleted successfully", topic);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to delete topic", error.message);
    }
  }
}