import { Field, ObjectType, Int, registerEnumType } from '@nestjs/graphql';
import { UserGenreFans } from './user-genre-fans.model';
import { UserAnimeFans } from './user-anime-fans.model';
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
  animesCount: number;

  @Field(() => Int)
  reviewsCount: number;

  @Field(() => [UserGenreFans], { nullable: true })
  favoriteGenres?: UserGenreFans[];

  @Field(() => [UserAnimeFans], { nullable: true })
  favoriteAnimes?: UserAnimeFans[];

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
