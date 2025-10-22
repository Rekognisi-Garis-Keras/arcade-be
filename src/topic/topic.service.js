import { generateSlug } from "../utils/slug.util.js";
import { TopicResponseDTO } from "./dto/topic-response.dto.js";

export class TopicService {
  constructor(topicRepo, subjectService) {
    this.topicRepo = topicRepo;
    this.subjectService = subjectService;
  }

  async createTopic(subSlug, data) {
    // subject find
    const subject = await this.subjectService.getSubjectBySlug(subSlug);
    if (!subject) {
      return null;
    }

    // generate topic slug
    const slug = generateSlug(data.title);

    // validate
    const findSlug = await this.topicRepo.findByTopicSlug(slug);
    if (findSlug) {
      throw new Error("topic already exist");
    }

    // create
    const newTopic = { ...data, slug, subject_id: subject.id };
    const topic = await this.topicRepo.create(newTopic);
    return new TopicResponseDTO(topic);
  }

  async getTopicByTopicSlug(slug) {
    const topic = await this.topicRepo.findByTopicSlug(slug);
    return topic ? new TopicResponseDTO(topic) : null;
  }

  async getTopicBySubjectSlug(slug) {
    const topics = await this.topicRepo.findBySubjectSlug(slug);
    return topics ? topics.map(topic => new TopicResponseDTO(topic)) : null;
  }

  async updateTopic(slug, data) {
    let updatedData = { ...data };
    if (data.title) {
      const newSlug = generateSlug(data.title);
      // validate
      const findSlug = await this.topicRepo.findByTopicSlug(newSlug);
      if (findSlug) {
        throw new Error("topic already exist");
      }
      updatedData.slug = newSlug;
    }
    const topic = await this.topicRepo.update(slug, updatedData);
    return new TopicResponseDTO(topic);
  }

  async deleteTopic(slug) {
    const topic = await this.topicRepo.delete(slug);
    return topic;
  }
}