import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime } from '@prisma/client';
import {
  Anime as AnimeModel,
  CreateAnimeInput,
  UpdateAnimeInput,
} from './models/anime.model';

@Resolver()
export class AnimeResolver {
  constructor(private animeService: AnimeService) {}

  @Query(() => [AnimeModel], { nullable: true })
  async getAllAnimes(@Args('limit') limit?: number): Promise<Anime[]> {
    return this.animeService.findAll(limit);
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

  @Mutation(() => AnimeModel, { nullable: true })
  async updateAnime(
    @Args('id') id: number,
    @Args('input') input: UpdateAnimeInput,
  ): Promise<Anime> {
    return this.animeService.update(id, input);
  }

  @Mutation(() => AnimeModel, { nullable: true })
  async deleteAnime(@Args('id') id: number): Promise<Anime> {
    return await this.animeService.delete(id);
  }
}
