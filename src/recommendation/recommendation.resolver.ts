import { Resolver, Query, Args } from '@nestjs/graphql';
import { RecommendationService } from './recommendation.service';
import { Anime as PrismaAnime } from '@prisma/client';
import { Anime } from 'src/@generated/anime/anime.model';

@Resolver()
export class RecommendationResolver {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Query(() => [Anime])
  async getAnimeRecommendations(
    @Args('userId') userId: number,
    @Args('animeCount') animeCount: number,
  ): Promise<PrismaAnime[]> {
    return this.recommendationService.getRecommendationsForUser(userId, animeCount);
  }
}
