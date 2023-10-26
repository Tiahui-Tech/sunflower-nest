import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime } from 'src/@generated/anime/anime.model';
import { Anime as PrismaAnime } from '@prisma/client'; 
import { AnimeCreateInput } from 'src/@generated/anime/anime-create.input';

@Resolver()
export class AnimeResolver {
  constructor(private animeService: AnimeService) {}

  @Query(() => [Anime], { nullable: true })
  async getAllAnimes(): Promise<PrismaAnime[]> {
    return this.animeService.findAll();
  }

  @Query(() => [Anime], { nullable: true })
  async getTopAnime(): Promise<PrismaAnime[]> {
    return this.animeService.findTopAnime();
  }

  @Query(() => Anime, { nullable: true })
  async getAnimeById(@Args('id') id: number): Promise<PrismaAnime> {
    return this.animeService.findById(id);
  }

  @Mutation(() => Anime, { nullable: true })
  async createAnime(@Args('input') input: AnimeCreateInput): Promise<Anime> {
    return this.animeService.create(input);
  }
}
