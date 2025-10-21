import { ResponseUtil } from "../utils/response.util.js";
import { subjectCreateSchema, subjectUpdateSchema } from "./dto/subject-request.dto.js";
import { SubjectResponseDto } from "./dto/subject-response.dto.js";

export class SubjectController {
  constructor(subjectService) {
    this.subjectService = subjectService;
  }

  create = async (req, res) => {
    try {
      // validate
      const { error, value } = subjectCreateSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }

      // create
      const subject = await this.subjectService.createSubject(value);
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
      const { id } = req.params;
      const subject = await this.subjectService.getSubjectById(parseInt(id));
      if (!subject) {
        return ResponseUtil.notFound(res, "Subject not found");
      }
      const { error, value } = subjectUpdateSchema.validate(req.body);
      if (error) {
        return ResponseUtil.validationError(res, error.details[0].message, error.details);
      }
      
      // update
      const updatedSubject = await this.subjectService.updateSubject(parseInt(id), value);
      return ResponseUtil.success(res, 200, "Subject updated successfully", subject);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to update subject", error.message);
    }
  }

  delete = async (req, res) => {
    try {
      // validate
      const { id } = req.params;
      const subject = await this.subjectService.getSubjectById(parseInt(id));
      if (!subject) {
        return ResponseUtil.notFound(res, "subject not found");
      }

      // delete
      await this.subjectService.deleteSubject(parseInt(id));
      return ResponseUtil.success(res, 200, "Subject deleted successfully", subject);
    } catch (error) {
      console.error(error);
      return ResponseUtil.error(res, 500, "Failed to delete subject", error.message);
    }
  }
}