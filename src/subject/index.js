import { SubjectController } from "./subject.controller.js";
import { SubjectRepository } from "./subject.repository.js";
import { SubjectService } from "./subject.service.js";

const subjectRepo = new SubjectRepository();
const subjectService = new SubjectService(subjectRepo);
const subjectController = new SubjectController(subjectService);

export {
  subjectRepo,
  subjectService,
  subjectController,
};