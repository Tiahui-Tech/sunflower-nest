import { Field, ObjectType, Int } from '@nestjs/graphql';
import { StaffOnAnime } from './staff-on-anime.model';

@ObjectType()
export class StaffMember {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  imgURL: string;

  @Field(() => [StaffOnAnime], { nullable: true })
  animes?: StaffOnAnime[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
