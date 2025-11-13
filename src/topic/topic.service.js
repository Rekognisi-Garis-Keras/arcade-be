import { generateSlug } from "../utils/slug.util.js";
import { TopicResponseDTO } from "./dto/topic-response.dto.js";
import { NotFoundError, ValidationError } from "../utils/error.util.js";
import { topicCreateSchema, topicUpdateSchema } from "./dto/topic-request.dto.js";
import { deleteFromPublic, processFile, uploadToPublic } from "../utils/upload.util.js";
import { handleUpload } from "../config/cloudinary.js";

export class TopicService {
  constructor(topicRepo, subjectService, tFinishedService) {
    this.topicRepo = topicRepo;
    this.subjectService = subjectService;
    this.tFinishedService = tFinishedService;
  }

  async createTopic(subSlug, data, icon) {
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

    // handle upload icon
    const base64 = Buffer.from(icon.buffer).toString("base64");
    const dataURI = `data:${icon.mimetype};base64,${base64}`;
    const uploadIcon = await handleUpload(dataURI, "icon");
    const icon_url = uploadIcon.secure_url;

    // create
    const newTopic = { 
      ...data,
      icon_url,
      slug,
      subject: { connect: { id: subject.id } }
    };
    
    const topic = await this.topicRepo.create(newTopic);
    return new TopicResponseDTO(topic);
  }

  async getAllTopics() {
    const topics = await this.topicRepo.findAll();
    return topics.map(topic => new TopicResponseDTO(topic));
  }

  async getTopicByTopicSlug(slug, userId = null) {
    const topic = await this.topicRepo.findByTopicSlug(slug);
    if (!topic) {
      throw new NotFoundError("Topic not found");
    }

    // buat TopicFinished jika belum ada
    if (userId) {
      const existingFinished = await this.tFinishedService.findByUserAndTopic(userId, topic.id);
      if (!existingFinished) {
        await this.tFinishedService.create({
          user_id: userId,
          topic_id: topic.id,
          finished: false,
          finished_at: null,
        });
      }
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

  async updateTopic(slug, data, files) {
    // find topic by slug
    const existing = await this.topicRepo.findByTopicSlug(slug);
    if (!existing) throw new NotFoundError("Topic not found");

    // validate
    const { error, value } = topicUpdateSchema.validate(data);
    if (error) throw new ValidationError(error.details[0].message, error.details);
    let updatedData = { ...value };

    // slug
    if (data && value.title) {
      const newSlug = generateSlug(value.title);
      const duplicate = await this.topicRepo.findByTopicSlug(newSlug);
      if (duplicate && duplicate.slug !== slug)
        throw new ValidationError("Topic with this title already exists");
      updatedData.slug = newSlug;
    }

    // handle file
    updatedData.model_url = await processFile(
      existing.model_url,
      files?.model,
      "topic/models"
    );
    updatedData.marker_img_url = await processFile(
      existing.marker_img_url,
      files?.marker,
      "topic/markers"
    );
    updatedData.icon_url = await processFile(
      existing.icon_url,
      files?.icon,
      "topic/icons"
    );
    
    const topic = await this.topicRepo.update(slug, updatedData);
    return new TopicResponseDTO(topic);
  }

  async deleteTopic(slug) {
    const existing = await this.topicRepo.findByTopicSlug(slug);
    if (!existing) throw new NotFoundError("Topic not found");
  
    await Promise.all([
      deleteFromPublic(existing.model_url),
      deleteFromPublic(existing.marker_img_url),
    ]);
  
    const topic = await this.topicRepo.delete(slug);
    return new TopicResponseDTO(topic);
  }
}