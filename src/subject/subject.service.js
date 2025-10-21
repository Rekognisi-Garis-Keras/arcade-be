import { generateSlug } from "../utils/slug.util.js";
import { SubjectResponseDto } from "./dto/subject-response.dto.js";

export class SubjectService {
  constructor(subjectRepo) {
    this.subjectRepo = subjectRepo;
  }

  async createSubject(data) {
    const slug = generateSlug(data.name);
    const newSubject = { ...data, slug };
    const subject = await this.subjectRepo.create(newSubject);
    return new SubjectResponseDto(subject);
  }

  async getSubjects() {
    const subjects = await this.subjectRepo.findAll();
    return subjects.map(subject => new SubjectResponseDto(subject));
  }

  async getSubjectById(id) {
    const subject = await this.subjectRepo.findById(id);
    return subject;
  }

  async getSubjectBySlug(slug) {
    const subject = await this.subjectRepo.findBySlug(slug);
    return new SubjectResponseDto(subject);
  }

  async updateSubject(id, data) {
    let updatedSubject = { ...data };
    if (data.name) {
      updatedSubject.slug = generateSlug(data.name);
    }
    const subject = await this.subjectRepo.update(id, updatedSubject);
    return new SubjectResponseDto(subject);
  }

  async deleteSubject(id) {
    const subject = await this.subjectRepo.delete(id);
    return new SubjectResponseDto(subject);
  }
}