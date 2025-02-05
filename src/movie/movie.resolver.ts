// src/movies/movies.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { MoviesService } from './movie.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Mutation(() => Movie)
  createMovie(@Args('createMovieInput') createMovieInput: CreateMovieInput) {
    return this.moviesService.create(createMovieInput);
  }

  @Query(() => [Movie], { name: 'movies' })
  findAll() {
    return this.moviesService.findAll();
  }

  @Query(() => Movie, { name: 'movie' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.moviesService.findOne(id);
  }

  @Query(() => [Movie], { name: 'moviesByGenre' })
  findByGenre(@Args('genre') genre: string) {
    return this.moviesService.findByGenre(genre);
  }

  @Mutation(() => Movie)
  updateMovie(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateMovieInput') updateMovieInput: UpdateMovieInput,
  ) {
    return this.moviesService.update(id, updateMovieInput);
  }

  @Mutation(() => Movie)
  removeMovie(@Args('id', { type: () => ID }) id: string) {
    return this.moviesService.remove(id);
  }
}