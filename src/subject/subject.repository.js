import prisma from "../../prisma.js";

export class SubjectRepository {
  async create(data) {
    return await prisma.subject.create({ data });
  }

  async findAll() {
    return await prisma.subject.findMany();
  }

  async findById(id) {
    return await prisma.subject.findUnique({ where: { id } });
  }

  async findBySlug(slug) {
    return await prisma.subject.findFirst({ where: { slug } });
  }

  async update(slug, data) {
    return await prisma.subject.update({ where: { slug }, data });
  }

  async delete(slug) {
    return await prisma.subject.delete({ where: { slug } });
  }
}