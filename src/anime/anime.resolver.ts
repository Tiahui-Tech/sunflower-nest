import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime as PrismaAnime, Prisma } from '@prisma/client'; 

@Resolver()
export class AnimeResolver {
  constructor(private animeService: AnimeService) {}

  @Query()
  async getAllAnimes(): Promise<PrismaAnime[]> {
    return this.animeService.findAll();
  }

  @Query()
  async getAnimeById(@Args('id') id: number): Promise<PrismaAnime> {
    return this.animeService.findById(id);
  }

  @Mutation()
  async createAnime(@Args('input') input: Prisma.AnimeCreateInput): Promise<PrismaAnime> {
    return this.animeService.create(input);
  }
}
