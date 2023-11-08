import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CastMember } from './cast-member.model';
import { Anime } from './anime.model';

@ObjectType()
export class CastOnAnime {
  @Field(() => Int)
  castId: number;

  @Field(() => Int)
  animeId: number;

  @Field(() => CastMember)
  cast: CastMember;

  @Field(() => Anime)
  anime: Anime;
}
