export interface Movie {
    _id: string;
    title: string;
    director: string;
    year: number;
    genres: string[];
    duration: number;
    rating: number;
  }
  
  export interface CreateMovieInput {
    title: string;
    director: string;
    year: number;
    genres: string[];
    duration: number;
    rating?: number;
  }