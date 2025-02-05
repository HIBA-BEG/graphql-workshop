import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesService } from './movie.service';
import { MoviesResolver } from './movie.resolver';
import { Movie, MovieSchema } from './entities/movie.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])
  ],
  providers: [MoviesResolver, MoviesService],
  exports: [MoviesService]
})
export class MoviesModule {}