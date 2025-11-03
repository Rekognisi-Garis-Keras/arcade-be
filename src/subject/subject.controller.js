import { handleUpload } from "../config/cloudinary.js";
import { ResponseUtil } from "../utils/response.util.js";
import { subjectCreateSchema, subjectUpdateSchema } from "./dto/subject-request.dto.js";

export class SubjectController {
  constructor(subjectService) {
    this.subjectService = subjectService;
  }

  create = async (req, res) => {
    try {
      // validate body
      const { error, value } = subjectCreateSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }

      // upload file to cloudinary
      if (!req.file) {
        return ResponseUtil.validationError(res, "Thumbnail file is required");
      }

      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI, "thumbnail");

      // create subject
      const subjectData = {
        ...value,
        thumbnail_url: cldRes.secure_url,
      };
      const subject = await this.subjectService.createSubject(subjectData);
      return ResponseUtil.success(res, 201, "Subject created successfully", subject);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to create subject", error.message);
    }
  }

  getAll = async (req, res) => {
    try {
      const subjects = await this.subjectService.getSubjects();
      return ResponseUtil.success(res, 200, "Subjects retrieved successfully", subjects);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to retrieve subjects", error.message);
    }
  }

  getBySlug = async (req, res) => {
    try {
      const { slug } = req.params;
      const subject = await this.subjectService.getSubjectBySlug(slug);
      if (!subject) {
        return ResponseUtil.notFound(res, "Subject not found");
      }
      return ResponseUtil.success(res, 200, "Subject retrieved successfully", subject);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to retrieve subject", error.message);
    }
  }

  update = async (req, res) => {
    try {
      // validate
      const { slug } = req.params;
      const subject = await this.subjectService.getSubjectBySlug(slug);
      if (!subject) {
        return ResponseUtil.notFound(res, "Subject not found");
      }
      const { error, value } = subjectUpdateSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }

      // handle optional thumbnail update
      let thumbnail_url = subject.thumbnail_url;
      if (req.file) {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        thumbnail_url = cldRes.secure_url;
      }

      // update
      const updatedSubject = await this.subjectService.updateSubject(slug, {
        ...value,
        thumbnail_url,
      });
      return ResponseUtil.success(res, 200, "Subject updated successfully", updatedSubject);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to update subject", error.message);
    }
  }

  delete = async (req, res) => {
    try {
      // validate
      const { slug } = req.params;
      const subject = await this.subjectService.getSubjectBySlug(slug);
      if (!subject) {
        return ResponseUtil.notFound(res, "subject not found");
      }

      // delete
      await this.subjectService.deleteSubject(slug);
      return ResponseUtil.success(res, 200, "Subject deleted successfully", subject);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to delete subject", error.message);
    }
  }
}