import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREATE_MOVIE, GET_MOVIES } from '../graphql/operations';
import { CreateMovieInput } from '../types/movie';

export function CreateMovie() {
  const [createMovie] = useMutation(CREATE_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }],
  });

  const [formData, setFormData] = useState<CreateMovieInput>({
    title: '',
    director: '',
    year: new Date().getFullYear(),
    genres: [],
    duration: 0,
    rating: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMovie({
        variables: {
          createMovieInput: {
            ...formData,
            genres: formData.genres.filter(Boolean),
          },
        },
      });
      setFormData({
        title: '',
        director: '',
        year: new Date().getFullYear(),
        genres: [],
        duration: 0,
        rating: 0,
      });
    } catch (err) {
      console.error('Error creating movie:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title: </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Director: </label>
        <input
          type="text"
          value={formData.director}
          onChange={(e) => setFormData({ ...formData, director: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Year: </label>
        <input
          type="number"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Genres (comma-separated): </label>
        <input
          type="text"
          value={formData.genres.join(', ')}
          onChange={(e) => setFormData({ ...formData, genres: e.target.value.split(',').map(g => g.trim()) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          placeholder="Action, Drama, Comedy"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (minutes): </label>
        <input
          type="number"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Rating: </label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Add Movie
      </button>
    </form>
  );
}