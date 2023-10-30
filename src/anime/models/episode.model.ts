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
  season: number;

  @Field()
  coverURL: string;

  @Field()
  title: string;

  @Field(() => Int)
  duration: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
