import { useQuery, useMutation } from '@apollo/client';
import { GET_MOVIES, DELETE_MOVIE } from '../graphql/operations';
import { Movie } from '../types/movie';
import './MovieList.css';

export function MovieList() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }], // Refetch the movie list after deletion
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      await deleteMovie({ variables: { id } });
    }
  };

  return (
    <div className="movie-list">
      {data.movies.map((movie: Movie) => (
        <div className="movie-card" key={movie._id}>
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-year">Released on: {movie.year}</p>
          <div className="movie-genres">
            Genres: {movie.genres.join(', ')}
          </div>
          <div className="movie-duration">
            Duration: {movie.duration} min
          </div>
          <div className="movie-rating">
            Rating: {movie.rating}★
          </div>
          <button
            onClick={() => handleDelete(movie._id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}