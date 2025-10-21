import prisma from "../../prisma.js";

export class TopicRepository {
  async create(data) {
    return await prisma.topic.create({ data });
  }

  async findByTopicSlug(slug) {
    return await prisma.topic.findFirst({ where: { slug } });
  }

  async findBySubjectSlug(slug) {
    const subject = await prisma.subject.findFirst({ 
      where: { slug },
      include: { topics: true },
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