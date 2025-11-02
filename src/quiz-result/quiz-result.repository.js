import prisma from "../../prisma/prisma.js";

export class QuizResultRepository {
  async create(data) {
    return await prisma.quizResult.create({ data });
  }
}