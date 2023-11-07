import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Anime, Prisma } from '@prisma/client';

@Injectable()
export class AnimeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(limit?: number): Promise<Anime[]> {
    const allAnimes = await this.prisma.anime.findMany({
      take: limit,
    });
    const sortedAnimes = allAnimes.sort((a, b) => a.id - b.id);

    return sortedAnimes;
  }

  async findTopAnime(): Promise<Anime[]> {
    const topAnimes = await this.prisma.anime.findMany({
      orderBy: {
        viewCount: 'desc',
      },
      take: 10,
    });
    const sortedAnimes = topAnimes.sort((a, b) => b.viewCount - a.viewCount);

    return sortedAnimes;
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

  async update(id: number, input: Prisma.AnimeUpdateInput): Promise<Anime> {
    const anime = await this.prisma.anime.findUnique({ where: { id } });
    if (anime) {
      await this.prisma.anime.update({ where: { id }, data: input });
    } else {
      throw new NotFoundException(`Anime with ID ${id} not found`);
    }

    return anime;
  }

  async delete(id: number): Promise<Anime> {
    const anime = await this.prisma.anime.findUnique({ where: { id } });
    if (anime) {
      await this.prisma.anime.delete({ where: { id } });
    } else {
      throw new NotFoundException(`Anime with ID ${id} not found`);
    }

    return anime;
  }
}
