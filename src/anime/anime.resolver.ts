import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime, AnimeStatus, Prisma } from '@prisma/client';
import { Anime as AnimeModel, CreateAnimeInput } from './models/anime.model';

@Resolver()
export class AnimeResolver {
  constructor(private animeService: AnimeService) {}

  @Query(() => [AnimeModel], { nullable: true })
  async getAllAnimes(): Promise<Anime[]> {
    return this.animeService.findAll();
  }

  @Query(() => [AnimeModel], { nullable: true })
  async getTopAnime(): Promise<Anime[]> {
    return this.animeService.findTopAnime();
  }

  @Query(() => AnimeModel, { nullable: true })
  async getAnimeById(@Args('id') id: number): Promise<Anime> {
    return this.animeService.findById(id);
  }

  @Mutation(() => AnimeModel, { nullable: true })
  async createAnime(@Args('input') input: CreateAnimeInput): Promise<Anime> {
    return this.animeService.create(input);
  }
}
