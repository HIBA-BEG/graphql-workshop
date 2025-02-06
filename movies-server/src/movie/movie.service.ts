import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './entities/movie.entity';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
  ) {}

  create(createMovieInput: CreateMovieInput) {
    const newMovie = new this.movieModel(createMovieInput);
    return newMovie.save();
  }

  findAll() {
    return this.movieModel.find().exec();
  }

  findOne(id: string) {
    return this.movieModel.findById(id).exec();
  }

  update(id: string, updateMovieInput: UpdateMovieInput) {
    return this.movieModel
      .findByIdAndUpdate(id, updateMovieInput, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.movieModel.findByIdAndDelete(id).exec();
  }

  findByGenre(genre: string) {
    return this.movieModel.find({ genres: genre }).exec();
  }
}