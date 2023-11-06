import {
  Field,
  ObjectType,
  Int,
  registerEnumType,
  InputType,
} from '@nestjs/graphql';
import { UserAnimeSaved } from './user-anime-saved.model';
import { UserAnimeLiked } from './user-anime-liked.model';
import { Follower } from './follower.model';
import { Review } from './review.model';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NON_BINARY = 'NON_BINARY',
}

registerEnumType(Gender, {
  name: 'Gender',
});

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  avatarURL?: string;

  @Field(() => Gender)
  gender: Gender;

  @Field(() => Int)
  followersCount: number;

  @Field(() => Int)
  followingCount: number;

  @Field(() => Int)
  savedAnimesCount: number;

  @Field(() => Int)
  likedAnimesCount: number;

  @Field(() => Int)
  reviewsCount: number;

  @Field(() => [UserAnimeSaved], { nullable: true })
  savedAnimes?: UserAnimeSaved[];

  @Field(() => [UserAnimeLiked], { nullable: true })
  likedAnimes?: UserAnimeLiked[];

  @Field(() => [Follower], { nullable: true })
  following?: Follower[];

  @Field(() => [Follower], { nullable: true })
  followers?: Follower[];

  @Field(() => [Review], { nullable: true })
  reviews?: Review[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CreateUserInput {
  email: string;

  username: string;

  avatarURL?: string;

  gender: Gender;
}
