import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREATE_MOVIE, GET_MOVIES } from '../graphql/operations';
import { CreateMovieInput } from '../types/movie';
import './CreateMovie.css';

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
    <form onSubmit={handleSubmit} className="form-container">
    <h2 className="form-title">Add a New Movie</h2>
    <div className="form-group">
      <label className="form-label">Title:</label>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label className="form-label">Director:</label>
      <input
        type="text"
        value={formData.director}
        onChange={(e) => setFormData({ ...formData, director: e.target.value })}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label className="form-label">Year:</label>
      <input
        type="number"
        value={formData.year}
        onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label className="form-label">Genres (comma-separated):</label>
      <input
        type="text"
        value={formData.genres.join(', ')}
        onChange={(e) => setFormData({ ...formData, genres: e.target.value.split(',').map(g => g.trim()) })}
        className="form-input"
        placeholder="Action, Drama, Comedy"
      />
    </div>

    <div className="form-group">
      <label className="form-label">Duration (minutes):</label>
      <input
        type="number"
        value={formData.duration}
        onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
        className="form-input"
        required
      />
    </div>

    <div className="form-group">
      <label className="form-label">Rating:</label>
      <input
        type="number"
        step="0.1"
        min="0"
        max="10"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
        className="form-input"
      />
    </div>

    <button type="submit" className="submit-button">Add Movie</button>
  </form>
  );
}