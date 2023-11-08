import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from './user.model';
import { Genre } from 'src/anime/models/genre.model';

@ObjectType()
export class UserGenreFans {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  genreId: number;

  @Field(() => User)
  user: User;

  @Field(() => Genre)
  genre: Genre;

  @Field()
  createdAt: Date;
}
