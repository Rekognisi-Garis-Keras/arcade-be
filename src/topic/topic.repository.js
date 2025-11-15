import prisma from "../../prisma/prisma.js";

export class TopicRepository {
  async create(data) {
    return await prisma.topic.create({ data });
  }

  async findAll() {
    return await prisma.topic.findMany({ include: { subject: true } });
  }

  async findByTopicSlug(slug) {
    return await prisma.topic.findFirst({ 
      where: { slug }, 
      include: { quizzes: true } 
    });
  }

  async findBySubjectSlug(slug) {
    const subject = await prisma.subject.findFirst({ 
      where: { slug },
      include: { 
        topics: {
          include: {
            quizzes: true
          }
        }
      },
    });
    return subject ? subject.topics : null;
  }
 
  async update(slug, data) {
    return await prisma.topic.update({ where: { slug }, data });
  }

  async delete(slug) {
    return await prisma.topic.delete({ where: { slug } });
  }
}