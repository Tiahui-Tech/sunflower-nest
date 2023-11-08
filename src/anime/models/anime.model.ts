import {
  Field,
  ObjectType,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Tag } from './tag.model';
import { Genre } from './genre.model';
import { Review } from 'src/user/models/review.model';
import { Episode } from './episode.model';
import { CastOnAnime } from './cast-on-anime.model';
import { UserAnimeFans } from 'src/user/models/user-anime-fans.model';

enum AnimeStatus {
  /// Anime is currently on air.
  ONGOING = 'ONGOING',
  /// Anime has finished airing.
  FINISHED = 'FINISHED',
  /// Anime is yet to be aired.
  UPCOMING = 'UPCOMING',
  /// Anime is on an indefinite break
  HIATUS = 'HIATUS',
  /// Anime is in a temporary and definite break
  ON_BREAK = 'ON_BREAK',
  /// Anime was cancelled/abandoned suddenly
  DROPPED = 'DROPPED',
}

registerEnumType(AnimeStatus, {
  name: 'AnimeStatus',
});

@ObjectType()
export class Anime {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  synopsis: string;

  @Field(() => AnimeStatus)
  status: AnimeStatus;

  @Field()
  imageURL: string;

  @Field()
  trailerURL: string;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field(() => [Genre], { nullable: true })
  genres?: Genre[];

  @Field(() => [Review], { nullable: true })
  reviews?: Review[];

  @Field(() => [Episode], { nullable: true })
  episodes?: Episode[];

  @Field(() => [CastOnAnime], { nullable: true })
  castMembers?: CastOnAnime[];

  @Field(() => Float)
  rating: number;

  @Field(() => Int)
  totalVotes: number;

  @Field(() => Int)
  viewCount: number;

  @Field(() => [UserAnimeFans], { nullable: true })
  fans?: UserAnimeFans[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
