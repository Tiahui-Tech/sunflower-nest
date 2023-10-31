import {
  Field,
  ObjectType,
  InputType,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { Tag } from './tag.model';
import { Genre } from './genre.model';
import { Review } from 'src/user/models/review.model';
import { Episode } from './episode.model';
import { CastOnAnime } from './cast-on-anime.model';
import { UserAnimeFans } from 'src/user/models/user-anime-fans.model';

enum AnimeStatus {
  /// Anime is currently on air.
  ONGOING = 'ONGOING',
  /// Anime has finished airing.
  FINISHED = 'FINISHED',
  /// Anime is yet to be aired.
  UPCOMING = 'UPCOMING',
  /// Anime is on an indefinite break
  HIATUS = 'HIATUS',
  /// Anime is in a temporary and definite break
  ON_BREAK = 'ON_BREAK',
  /// Anime was cancelled/abandoned suddenly
  DROPPED = 'DROPPED',
}

registerEnumType(AnimeStatus, {
  name: 'AnimeStatus',
});

@ObjectType()
export class Anime {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  synopsis: string;

  @Field(() => AnimeStatus)
  status: AnimeStatus;

  @Field()
  imageURL: string;

  @Field()
  trailerURL: string;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field(() => [Genre], { nullable: true })
  genres?: Genre[];

  @Field(() => [Review], { nullable: true })
  reviews?: Review[];

  @Field(() => [Episode], { nullable: true })
  episodes?: Episode[];

  @Field(() => [CastOnAnime], { nullable: true })
  castMembers?: CastOnAnime[];

  @Field(() => Float)
  rating: number;

  @Field(() => Int)
  totalVotes: number;

  @Field(() => Int)
  viewCount: number;

  @Field(() => [UserAnimeFans], { nullable: true })
  fans?: UserAnimeFans[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class AnimeCreateInput {
  @Field()
  title: string;

  @Field()
  synopsis: string;

  @Field(type => String) // Asumiendo que $Enums.AnimeStatus es un string o enum. Si es un enum, reemplaza String con el tipo de enum.
  status: string; // Cambia el tipo si AnimeStatus no es un string.

  @Field()
  imageURL: string;

  @Field()
  trailerURL: string;

  @Field(type => Int)
  rating: number;

  @Field(type => Int, { nullable: true })
  totalVotes?: number;

  @Field(type => Int, { nullable: true })
  viewCount?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // A continuación, las propiedades complejas. 
  // Estas son representaciones simplificadas y deberías ajustarlas según tus necesidades.

  @Field(type => [String], { nullable: true })
  tags?: string[]; // Simplificado, deberías tener un InputType específico para esto.

  @Field(type => [String], { nullable: true })
  genres?: string[]; // Simplificado, deberías tener un InputType específico para esto.

  @Field(type => [String], { nullable: true })
  reviews?: string[]; // Simplificado, deberías tener un InputType específico para esto.

  @Field(type => [String], { nullable: true })
  episodes?: string[]; // Simplificado, deberías tener un InputType específico para esto.

  @Field(type => [String], { nullable: true })
  castMembers?: string[]; // Simplificado, deberías tener un InputType específico para esto.

  @Field(type => [String], { nullable: true })
  fans?: string[]; // Simplificado, deberías tener un InputType específico para esto.
}
