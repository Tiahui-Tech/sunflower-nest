import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Anime } from './anime.model';

@ObjectType()
export class Episode {
  @Field(() => Int)
  id: number;

  @Field(() => Anime)
  anime: Anime;

  @Field(() => Int)
  animeId: number;

  @Field(() => Int)
  episode: number;

  @Field()
  title: string;

  @Field()
  titleJapan: string;

  @Field()
  aired: Date;

  @Field(() => Int)
  score: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
