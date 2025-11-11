import { ResponseUtil } from "../utils/response.util.js";

export class SubjectController {
  constructor(subjectService) {
    this.subjectService = subjectService;
  }

  create = async (req, res, next) => {
    try {
      if (!req.file) {
        return ResponseUtil.validationError(res, "Icon file is required");
      }
      const subject = await this.subjectService.createSubject(req.body, req.file);
      return ResponseUtil.success(res, 201, "Subject created successfully", subject);
    } catch (error) {
      next(error);
    }
  }

  getAll = async (req, res, next) => {
    try {
      const subjects = await this.subjectService.getSubjects();
      return ResponseUtil.success(res, 200, "Subjects retrieved successfully", subjects);
    } catch (error) {
      next(error);
    }
  }

  getBySlug = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const subject = await this.subjectService.getSubjectBySlug(slug);
      if (!subject) {
        return ResponseUtil.notFound(res, "Subject not found");
      }
      return ResponseUtil.success(res, 200, "Subject retrieved successfully", subject);
    } catch (error) {
      next(error);
    }
  }

  update = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const updatedSubject = await this.subjectService.updateSubject(slug, req.body, req.file);
      return ResponseUtil.success(res, 200, "Subject updated successfully", updatedSubject);
    } catch (error) {
      next(error);
    }
  }

  delete = async (req, res, next) => {
    try {
      const { slug } = req.params;
      await this.subjectService.deleteSubject(slug);
      return ResponseUtil.success(res, 200, "Subject deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}