export class QuizAnswerService {
  constructor(qAnswerRepo) {
    this.qAnswerRepo = qAnswerRepo;
  }

  async createAnswers(resultId, data) {
    for (const detail of data) {
      detail.result_id = resultId;
    }
    return await this.qAnswerRepo.createMany(data);
  }
}