import { ResponseUtil } from "../utils/response.util.js";
import { topicCreateSchema, topicUpdateSchema } from "./dto/topic-request.dto.js";

export class TopicController {
  constructor(topicService) {
    this.topicService = topicService;
  }

  create = async (req, res, next) => {
    try {
      const modelFile = req?.files?.model?.[0];
      const markerFile = req?.files?.marker?.[0];
      const iconFile = req?.files?.icon?.[0];

      if (!modelFile || !markerFile || !iconFile) {
        return ResponseUtil.error(res, 400, "Model, marker, and icon file is required");
      }
      const { subSlug } = req.params;
      const topic = await this.topicService.createTopic(subSlug, req.body, {
        model: modelFile,
        marker: markerFile,
        icon: iconFile,
      });
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
      const topic = await this.topicService.getTopicByTopicSlug(topSlug);
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
      const modelFile = req?.files?.model?.[0];
      const markerFile = req?.files?.marker?.[0];
      const iconFile = req?.files?.icon?.[0];
      const updatedTopic = await this.topicService.updateTopic(
        topSlug,
        req.body,
        { model: modelFile, marker: markerFile, icon: iconFile }
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