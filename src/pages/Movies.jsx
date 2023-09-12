import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      const results = await getMovies(query);
      setMovies(results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
          {/* {movies.map(movie => (
            <li key={movie.id}>
              
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} />
              )}
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))} */}

{movies.map(movie => (
  <li key={movie.id}>
    {movie.poster_path ? (
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} />
    ) : (
      <div style={{ height: '300px',width: '200px',  backgroundColor: 'lightgray' }}></div>
    )}
    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  </li>
))}

        </ul>
      )}
    </div>
  );
};

export default Movies;

