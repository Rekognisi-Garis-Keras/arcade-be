import prisma from "../../prisma/prisma.js"

export class UserRepository {
  async create(data) {
    return await prisma.user.create({ data });
  }

  async findById(id) {
    return await prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email) {
    return await prisma.user.findFirst({ where: { email } });
  }
}