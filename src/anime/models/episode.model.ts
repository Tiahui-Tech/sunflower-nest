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

  @Field({ nullable: true })
  titleJapan?: string;

  @Field({ nullable: true })
  aired: Date;

  @Field(() => Int, { nullable: true })
  score: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
