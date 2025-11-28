import prisma from "../../prisma/prisma.js";

export class QuizResultRepository {
  async create(data) {
    return await prisma.quizResult.create({ data });
  }

  async findByUser(userId) {
    return await prisma.quizResult.findMany({
      where: { user_id: userId },
      include: {
        topic: {
          include: {
            subject: true
          }
        },
        quiz_answers: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });
  }

  async findByUUID(uuid) {
    return await prisma.quizResult.findUnique({
      where: { uuid },
      include: {
        topic: {
          include: {
            subject: true,
            quizzes: true
          }
        },
        quiz_answers: true
      }
    });
  }
}