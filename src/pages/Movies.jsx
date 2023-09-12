import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          include_adult: false,
          language: 'en-US',
          query: query,
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI',
        },
      });
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchMovies();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} />
              )}
              {/* {movie.title} */}
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;

