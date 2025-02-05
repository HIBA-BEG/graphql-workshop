import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field()
  title: string;

  @Field()
  director: string;

  @Field(() => Int)
  year: number;

  @Field(() => [String])
  genres: string[];

  @Field(() => Int)
  duration: number;

  @Field(() => Number, { nullable: true })
  rating?: number;
}
