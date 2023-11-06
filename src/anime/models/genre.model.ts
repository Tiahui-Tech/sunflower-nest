import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Anime } from './anime.model';

@ObjectType()
export class Genre {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Anime], { nullable: true })
  animes?: Anime[];

  @Field()
  createdAt: Date;
}
