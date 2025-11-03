import { handleUpload } from "../config/cloudinary.js";
import { NotFoundError, ValidationError } from "../utils/error.util.js";
import { generateSlug } from "../utils/slug.util.js";
import { subjectCreateSchema, subjectUpdateSchema } from "./dto/subject-request.dto.js";
import { SubjectResponseDto } from "./dto/subject-response.dto.js";

export class SubjectService {
  constructor(subjectRepo) {
    this.subjectRepo = subjectRepo;
  }

  async createSubject(data, file) {
    // validate body
    const { error, value } = subjectCreateSchema.validate(data);
    if (error) {
      throw new ValidationError(error.details[0].message, error.details);
    }

    // generate slug
    const slug = generateSlug(value.name);
    const isExist = await this.subjectRepo.findBySlug(slug);
    if (isExist) {
      throw new ValidationError("Subject already exists");
    }

    // upload file to cloudinary
    const base64 = Buffer.from(file.buffer).toString("base64");
    const dataURI = `data:${file.mimetype};base64,${base64}`;
    const cldRes = await handleUpload(dataURI, "thumbnail");

    const newSubject = {
      ...value,
      slug,
      thumbnail_url: cldRes.secure_url,
    };
    const subject = await this.subjectRepo.create(newSubject);
    return new SubjectResponseDto(subject);
  }

  async getSubjects() {
    const subjects = await this.subjectRepo.findAll();
    return subjects.map(subject => new SubjectResponseDto(subject));
  }

  async getSubjectById(id) {
    const subject = await this.subjectRepo.findById(id);
    if (!subject) {
      throw new NotFoundError('Subject not found');
    }
    return subject;
  }

  async getSubjectBySlug(slug) {
    const subject = await this.subjectRepo.findBySlug(slug);
    if (!subject) {
      throw new NotFoundError('Subject not found');
    }
    return new SubjectResponseDto(subject);
  }

  async updateSubject(slug, data, file) {
    // check is already exist
    const subject = await this.subjectRepo.findBySlug(slug);
    if (!subject) {
      throw new NotFoundError("Subject not found");
    }

    // validasi
    const { error, value } = subjectUpdateSchema.validate(data);
    if (error) {
      throw new ValidationError(error.details[0].message, error.details);
    }

    // handle thumbnail opsional
    let thumbnail_url = subject.thumbnail_url;
    if (file) {
      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataURI = `data:${file.mimetype};base64,${b64}`;
      const cldRes = await handleUpload(dataURI, "thumbnail");
      thumbnail_url = cldRes.secure_url;
    }

    // update slug jika nama berubah
    const updatedSubject = { ...value, thumbnail_url };
    if (value.name) {
      const newSlug = generateSlug(value.name);
      const existing = await this.subjectRepo.findBySlug(newSlug);

      if (existing && existing.slug !== slug) {
        throw new ValidationError("Subject with this name already exists");
      }

      updatedSubject.slug = newSlug;
    }

    // eksekusi
    const result = await this.subjectRepo.update(slug, updatedSubject);
    return new SubjectResponseDto(result);
  }

  async deleteSubject(slug) {
    const subject = await this.subjectRepo.findBySlug(slug);
    if (!subject) {
      throw new NotFoundError("Subject not found");
    }
    const deletedSubject = await this.subjectRepo.delete(slug);
    return new SubjectResponseDto(deletedSubject);
  }
}