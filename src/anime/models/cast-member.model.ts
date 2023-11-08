import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CastOnAnime } from './cast-on-anime.model';

@ObjectType()
export class CastMember {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  character: string;

  @Field()
  coverURL: string;

  @Field(() => [CastOnAnime], { nullable: true })
  animes?: CastOnAnime[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
