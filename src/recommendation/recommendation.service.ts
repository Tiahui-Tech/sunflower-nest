import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Anime } from '@prisma/client'; 

@Injectable()
export class RecommendationService {
  constructor(private readonly prisma: PrismaService) {}

  async getRecommendationsForUser(
    userId: number,
    animeCount: number,
  ): Promise<Anime[]> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        likedAnimes: true,
        savedAnimes: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const genreIds = user.savedAnimes.map((anime) => anime.animeId);

    return this.prisma.anime.findMany({
      where: {
        genres: {
          some: {
            id: {
              in: genreIds,
            },
          },
        },
      },
      take: animeCount,
    });
  }
}
