import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Anime } from './anime.model';
import { UserGenreFans } from 'src/user/models/user-anime-saved.model';

@ObjectType()
export class Genre {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Anime], { nullable: true })
  animes?: Anime[];

  @Field(() => [UserGenreFans], { nullable: true })
  fans?: UserGenreFans[];

  @Field()
  createdAt: Date;
}
