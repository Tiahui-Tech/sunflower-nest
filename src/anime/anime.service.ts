import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; 
import { Anime as PrismaAnime, Prisma } from '@prisma/client'; 

@Injectable()
export class AnimeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<PrismaAnime[]> {
    return this.prisma.anime.findMany();
  }

  async findById(id: number): Promise<PrismaAnime> {
    const anime = await this.prisma.anime.findUnique({ where: { id } });
    if (!anime) {
      throw new NotFoundException('Anime not found');
    }
    return anime;
  }

  async create(input: Prisma.AnimeCreateInput): Promise<PrismaAnime> {
    return this.prisma.anime.create({ data: input });
  }
}
