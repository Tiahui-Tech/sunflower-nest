import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime } from 'src/@generated/anime/anime.model';
import { AnimeCreateInput } from 'src/@generated/anime/anime-create.input';

@Resolver()
export class AnimeResolver {
  constructor(private animeService: AnimeService) {}

  @Query(() => [Anime], { nullable: true })
  async getAllAnimes(): Promise<Anime[]> {
    return this.animeService.findAll();
  }

  @Query(() => [Anime], { nullable: true })
  async getTopAnime(): Promise<Anime[]> {
    return this.animeService.findTopAnime();
  }

  @Query(() => Anime, { nullable: true })
  async getAnimeById(@Args('id') id: number): Promise<Anime> {
    return this.animeService.findById(id);
  }

  @Mutation(() => Anime, { nullable: true })
  async createAnime(@Args('input') input: AnimeCreateInput): Promise<Anime> {
    return this.animeService.create(input);
  }
}
