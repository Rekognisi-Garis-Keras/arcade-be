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

  async update(id, data) {
    return await prisma.subject.update({ where: { id }, data });
  }

  async delete(id) {
    return await prisma.subject.delete({ where: { id } });
  }
}