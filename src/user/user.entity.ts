import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

enum Gender {
  MALE,
  FEMALE,
  NON_BINARY,
}

enum AnimeStatus {
  ONGOING,
  FINISHED,
  UPCOMING,
  HIATUS,
  ON_BREAK,
  DROPPED,
}

registerEnumType(Gender, {
  name: 'Gender',
});

registerEnumType(AnimeStatus, {
  name: 'AnimeStatus',
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

  @Field(() => [String])
  favoriteGenres: string[];

  @Field(() => [String])
  favoriteAnimes: string[];

  @Field(() => [Int], { nullable: 'items' })
  followed?: number[];

  @Field(() => [Int], { nullable: 'items' })
  followers?: number[];

  @Field(() => [String], { nullable: 'items' })
  reviews?: string[];
}
