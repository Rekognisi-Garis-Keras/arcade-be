import { generateSlug } from "../utils/slug.util.js";
import { TopicResponseDTO } from "./dto/topic-response.dto.js";
import { NotFoundError, ValidationError } from "../utils/error.util.js";
import { topicCreateSchema, topicUpdateSchema } from "./dto/topic-request.dto.js";
import { uploadToPublic } from "../utils/upload.util.js";

export class TopicService {
  constructor(topicRepo, subjectService) {
    this.topicRepo = topicRepo;
    this.subjectService = subjectService;
  }

  async createTopic(subSlug, data, files) {
    const { error, value } = topicCreateSchema.validate(data);
    if (error) {
      throw new ValidationError(error.details[0].message, error.details);
    }

    // subject find
    const subject = await this.subjectService.getSubjectBySlug(subSlug);
    if (!subject) {
      throw new NotFoundError("Subject not found");
    }

    // generate topic slug
    const slug = generateSlug(value.title);

    // validate
    const findSlug = await this.topicRepo.findByTopicSlug(slug);
    if (findSlug) {
      throw new ValidationError("Topic already exists");
    }

    // handle file uploads
    let model_url = null;
    let marker_img_url = null;
    if (files && files.model) {
      const uploadModel = await uploadToPublic(files.model, "topic/models");
      model_url = uploadModel.url;
    }
    if (files && files.marker) {
      const uploadMarker = await uploadToPublic(files.marker, "topic/markers");
      marker_img_url = uploadMarker.url;
    }

    // create
    const newTopic = { 
      ...data, 
      slug,
      model_url,
      marker_img_url,
      subject: { connect: { id: subject.id } }
    };
    console.log(newTopic);
    const topic = await this.topicRepo.create(newTopic);
    return new TopicResponseDTO(topic);
  }

  async getAllTopics() {
    const topics = await this.topicRepo.findAll();
    return topics.map(topic => new TopicResponseDTO(topic));
  }

  async getTopicByTopicSlug(slug) {
    const topic = await this.topicRepo.findByTopicSlug(slug);
    if (!topic) {
      throw new NotFoundError("Topic not found");
    }
    return new TopicResponseDTO(topic);
  }

  async getTopicBySubjectSlug(slug) {
    const topics = await this.topicRepo.findBySubjectSlug(slug);
    if (!topics || topics.length === 0) {
      throw new NotFoundError("Topics for this subject not found");
    }
    return topics.map(topic => new TopicResponseDTO(topic));
  }

  async updateTopic(slug, data) {
    // find topic by slug
    const existingTopic = await this.topicRepo.findByTopicSlug(slug);
    if (!existingTopic) {
      throw new NotFoundError("Topic not found");
    }

    // validate
    const { error, value } = topicUpdateSchema.validate(data);
    if (error) {
      throw new ValidationError(error.details[0].message, error.details);
    }

    let updatedData = { ...value };
    if (value.title) {
      const newSlug = generateSlug(value.title);

      const findSlug = await this.topicRepo.findByTopicSlug(newSlug);
      if (findSlug && findSlug.slug !== slug) {
        throw new ValidationError("Topic with this title already exists");
      }
      
      updatedData.slug = newSlug;
    }

    const topic = await this.topicRepo.update(slug, updatedData);
    return new TopicResponseDTO(topic);
  }

  async deleteTopic(slug) {
    const existingTopic = await this.topicRepo.findByTopicSlug(slug);
    if (!existingTopic) {
      throw new NotFoundError("Topic not found");
    }
    const topic = await this.topicRepo.delete(slug);
    return new TopicResponseDTO(topic);
  }
}