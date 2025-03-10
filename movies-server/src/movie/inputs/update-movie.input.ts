import { CreateMovieInput } from './create-movie.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMovieInput extends PartialType(CreateMovieInput) {}