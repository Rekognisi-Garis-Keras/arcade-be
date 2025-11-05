import prisma from "../../prisma/prisma.js";

export class UserXpRepository {
  async findMany({ limit = 10, offset = 0 } = {}) {
    return await prisma.userXp.findMany({
      orderBy: [
        { xp: "desc" }
      ],
      take: limit,
      skip: offset,
      include: {
        user: true
      }
    });
  }

  async findByUserId(userId) {
    return await prisma.userXp.findFirst({
      where: { user_id: userId },
      include: {
        user: true
      }
    });
  }

  async create(userId, data) {
    return await prisma.userXp.create({
      data: {
        user_id: userId,
        xp: data.xp || 0,
      },
      include: {
        user: true
      }
    });
  }

  async update(userId, data) {
    return await prisma.userXp.update({
      where: { user_id: userId },
      data: { xp: data.xp },
    });
  }

  async getUserRank(userId) {
    const userXp = await this.findByUserId(userId);
    if (!userXp) {
      return null;
    }

    const rank = await prisma.userXp.count({
      where: {
        xp: {
          gt: userXp.xp
        }
      }
    });

    return rank + 1;
  }
}