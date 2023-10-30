import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Follower {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  followingId: number;

  @Field(() => User)
  following: User;

  @Field(() => Int)
  followerId: number;

  @Field(() => User)
  follower: User;

  @Field()
  createdAt: Date;
}
