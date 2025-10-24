import prisma from "../../prisma.js";

export class QuizResultRepository {
  async create(data) {
    return await prisma.quizResult.create({ data });
  }
}