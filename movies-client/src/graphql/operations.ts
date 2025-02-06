import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GetMovies {
    movies {
      _id
      title
      director
      year
      genres
      duration
      rating
    }
  }
`;

export const GET_MOVIE = gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      _id
      title
      director
      year
      genres
      duration
      rating
    }
  }
`;

export const CREATE_MOVIE = gql`
  mutation CreateMovie($createMovieInput: CreateMovieInput!) {
    createMovie(createMovieInput: $createMovieInput) {
      _id
      title
      director
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($id: ID!, $updateMovieInput: UpdateMovieInput!) {
    updateMovie(id: $id, updateMovieInput: $updateMovieInput) {
      _id
      title
      rating
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID!) {
    removeMovie(id: $id) {
      _id
      title
    }
  }
`;