import prisma from "../../prisma.js";

export class QuizAnswerRepository {
  async createMany(data) {
    return await prisma.quizAnswer.createManyAndReturn({ data });
  }
}