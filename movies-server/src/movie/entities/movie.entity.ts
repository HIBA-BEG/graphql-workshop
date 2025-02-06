import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Movie {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  director: string;

  @Prop({ required: true })
  @Field(() => Int)
  year: number;

  @Prop()
  @Field(() => [String])
  genres: string[];

  @Prop()
  @Field(() => Int)
  duration: number;

  @Prop()
  @Field(() => Number, { nullable: true })
  rating: number;
}

export type MovieDocument = Movie & Document;
export const MovieSchema = SchemaFactory.createForClass(Movie);