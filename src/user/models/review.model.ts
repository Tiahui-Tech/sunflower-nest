import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from './user.model';
import { Anime } from 'src/anime/models/anime.model';

@ObjectType()
export class Review {
  @Field(() => Int)
  id: number;

  @Field(() => User)
  user: User;

  @Field(() => Int)
  userId: number;

  @Field(() => Anime)
  anime: Anime;

  @Field(() => Int)
  animeId: number;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
