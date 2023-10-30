import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeResolver } from './anime.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AnimeService, AnimeResolver, PrismaService],
})
export class AnimeModule {}
