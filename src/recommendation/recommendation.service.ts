import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Anime } from 'src/@generated/anime/anime.model';

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
        favoriteGenres: true,
        favoriteAnimes: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const genreIds = user.favoriteGenres.map((genre) => genre.genreId);

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
