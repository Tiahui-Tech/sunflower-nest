import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Anime, Prisma } from '@prisma/client';

@Injectable()
export class AnimeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Anime[]> {
    return this.prisma.anime.findMany();
  }

  async findTopAnime(): Promise<Anime[]> {
    return this.prisma.anime.findMany({
      orderBy: {
        viewCount: 'desc',
      },
      take: 10,
    });
  }

  async findById(id: number): Promise<Anime> {
    const anime = await this.prisma.anime.findUnique({ where: { id } });
    if (!anime) {
      throw new NotFoundException('Anime not found');
    }
    return anime;
  }

  async create(input: Prisma.AnimeCreateInput): Promise<Anime> {
    return this.prisma.anime.create({ data: input });
  }
}
