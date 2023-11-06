import {
  Field,
  ObjectType,
  Int,
  Float,
  registerEnumType,
  InputType,
} from '@nestjs/graphql';
import { Tag } from './tag.model';
import { Genre } from './genre.model';
import { Review } from 'src/user/models/review.model';
import { Episode } from './episode.model';
import { CastOnAnime } from './cast-on-anime.model';
import { UserAnimeLiked } from 'src/user/models/user-anime-liked.model';
import { UserAnimeSaved } from 'src/user/models/user-anime-saved.model';
import { StaffOnAnime } from './staff-on-anime.model';

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

  @Field({ nullable: true })
  titleJapan?: string;

  @Field({ nullable: true })
  synopsis?: string;

  @Field(() => AnimeStatus, { nullable: true })
  status?: AnimeStatus;

  @Field({ nullable: true })
  airedFrom?: Date;

  @Field({ nullable: true })
  airedTo?: Date;

  @Field({ nullable: true })
  imageURL?: string;

  @Field({ nullable: true })
  trailerURL?: string;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field(() => [Genre], { nullable: true })
  genres?: Genre[];

  @Field(() => [Review], { nullable: true })
  reviews?: Review[];

  @Field(() => [Episode], { nullable: true })
  episodes?: Episode[];

  @Field(() => Int)
  episodesCount: number;

  @Field(() => [CastOnAnime], { nullable: true })
  castMembers?: CastOnAnime[];

  @Field(() => [StaffOnAnime], { nullable: true })
  staffMembers?: StaffOnAnime[];

  @Field(() => Float)
  rating: number;

  @Field(() => Int)
  totalVotes: number;

  @Field(() => Int)
  viewCount: number;

  @Field(() => [UserAnimeSaved], { nullable: true })
  savedBy?: UserAnimeSaved[];

  @Field(() => [UserAnimeLiked], { nullable: true })
  likedBy?: UserAnimeLiked[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CreateAnimeInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  titleJapan?: string;

  @Field(() => String, { nullable: true })
  synopsis?: string;

  @Field(() => AnimeStatus, { nullable: true })
  status?: AnimeStatus;

  @Field(() => Date, { nullable: true })
  airedFrom?: Date;

  @Field(() => Date, { nullable: true })
  airedTo?: Date;

  @Field(() => String, { nullable: true })
  imageURL?: string;

  @Field(() => String, { nullable: true })
  trailerURL?: string;

  @Field(() => Int)
  episodesCount: number;
}

@InputType()
export class UpdateAnimeInput {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  titleJapan?: string;

  @Field(() => String, { nullable: true })
  synopsis?: string;

  @Field(() => AnimeStatus, { nullable: true })
  status?: AnimeStatus;

  @Field(() => String, { nullable: true })
  airedFrom?: Date;

  @Field(() => String, { nullable: true })
  airedTo?: Date;

  @Field(() => String, { nullable: true })
  imageURL?: string;

  @Field(() => String, { nullable: true })
  trailerURL?: string;

  @Field(() => Int, { nullable: true })
  episodesCount?: number;

  @Field(() => Float, { nullable: true })
  rating?: number;

  @Field(() => Int, { nullable: true })
  totalVotes?: number;
}
