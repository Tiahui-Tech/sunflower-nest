import { Field, ObjectType, Int } from '@nestjs/graphql';
import { StaffMember } from './staff-member.model';
import { Anime } from './anime.model';

@ObjectType()
export class StaffOnAnime {
  @Field(() => Int)
  castId: number;

  @Field(() => Int)
  animeId: number;

  @Field(() => StaffMember)
  staff: StaffMember;

  @Field(() => Anime)
  anime: Anime;

  @Field({ nullable: true })
  position?: string;
}
