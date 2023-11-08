import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CastOnAnime } from './cast-on-anime.model';

@ObjectType()
export class CastMember {
  @Field(() => Int)
  id: number;

  @Field()
  actor: string;

  @Field({ nullable: true })
  actorImgURL?: string;

  @Field()
  character: string;

  @Field({ nullable: true })
  characterImgURL?: string;

  @Field(() => [CastOnAnime], { nullable: true })
  animes?: CastOnAnime[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
