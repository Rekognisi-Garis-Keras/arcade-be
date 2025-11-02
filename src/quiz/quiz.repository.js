import prisma from "../../prisma/prisma.js";

export class QuizRepository {
  async create(data) {
    return await prisma.quiz.create({ data });
  }

  async findByTopic(topSlug) {
    return await prisma.quiz.findMany({
      where: {
        topic: {
          slug: topSlug
        }
      }
    });
  }

  async findByUuid(uuid) {
    return await prisma.quiz.findUnique({ where: { uuid } });
  }

  async findById(id) {
    return await prisma.quiz.findUnique({
      where: { id },
      include: { topic: true }
    });
  }

  async update(id, data) {
    return await prisma.quiz.update({
      where: { id },
      data
    });
  }

  async delete(id) {
    return await prisma.quiz.delete({ where: { id } });
  }
}