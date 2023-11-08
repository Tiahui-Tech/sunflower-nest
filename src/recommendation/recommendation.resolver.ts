import { Resolver, Query, Args } from '@nestjs/graphql';
import { RecommendationService } from './recommendation.service';
import { Anime } from '@prisma/client';
import { Anime as AnimeModel } from 'src/anime/models/anime.model';

@Resolver()
export class RecommendationResolver {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Query(() => [AnimeModel])
  async getAnimeRecommendations(
    @Args('userId') userId: number,
    @Args('animeCount') animeCount: number,
  ): Promise<Anime[]> {
    return this.recommendationService.getRecommendationsForUser(userId, animeCount);
  }
}
