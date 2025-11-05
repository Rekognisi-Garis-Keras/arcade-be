import prisma from "../../prisma/prisma.js";

export class UserXpRepository {
  async create(data) {
    return await prisma.userXp.create({ data });
  }

  async findMany() {
    return await prisma.userXp.findMany({
      orderBy: [
        { created_at: "desc" },
        { xp: "desc" }
      ]
    });
  }

  async findByUserId(userId) {
    return await prisma.userXp.findUnique({
      where: { user_id: userId },
    });
  }

  async update(userId, data) {
    return await prisma.userXp.update({
      where: { user_id: userId },
      data,
    });
  }
}