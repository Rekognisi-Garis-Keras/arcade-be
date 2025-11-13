import prisma from "../../prisma/prisma.js";

export class TFinishedRepo {
  async create(data) {
    return await prisma.topicFinished.create({
      data,
    });
  }

  async findByUserId(userId) {
    return await prisma.topicFinished.findMany({
      where: {
        user_id: userId,
      },
      include: {
        topic: true,
      },
      orderBy: {
        finished_at: 'desc'
      }
    });
  }

  async findByUserAndTopic(userId, topicId) {
    return await prisma.topicFinished.findFirst({
      where: {
        user_id: userId,
        topic_id: topicId,
      },
      include: {
        topic: true,
      },
    });
  }

  async update(userId, topicId, data) {
    return await prisma.topicFinished.updateMany({
      where: {
        user_id: userId,
        topic_id: topicId,
      },
      data,
    });
  }

  async delete(id) {
    return await prisma.topicFinished.delete({
      where: { id },
    });
  }
}