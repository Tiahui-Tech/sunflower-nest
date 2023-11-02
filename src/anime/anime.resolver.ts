import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime, AnimeStatus, Prisma } from '@prisma/client';
import { Anime as AnimeModel } from './models/anime.model';

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
  async createAnime(
    @Args('title') title: string,
    @Args('synopsis') synopsis: string,
    @Args('status') status: AnimeStatus,
    @Args('imageURL') imageURL: string,
    @Args('trailerURL') trailerURL: string,
    @Args('rating') rating: number,
  ): Promise<Anime> {
    const newAnime = { title, synopsis, status, imageURL, trailerURL, rating };
    return this.animeService.create(newAnime);
  }
}
