import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from './user.model';
import { Anime } from 'src/anime/models/anime.model';

@ObjectType()
export class UserAnimeFans {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  animeId: number;

  @Field(() => User)
  user: User;

  @Field(() => Anime)
  anime: Anime;

  @Field()
  createdAt: Date;
}
