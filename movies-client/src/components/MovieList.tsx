import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../graphql/operations';
import { Movie } from '../types/movie';

export function MovieList() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.movies.map((movie: Movie) => (
        <div key={movie._id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <p className="text-gray-600">{movie.director}</p>
          <p className="text-sm text-gray-500">{movie.year}</p>
          <div className="mt-2">
            {movie.genres.map((genre) => (
              <span key={genre} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {genre}
              </span>
            ))}
          </div>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm text-gray-500">{movie.duration} min</span>
            <span className="text-sm font-semibold text-yellow-600">★ {movie.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}