import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation} from 'react-router-dom';
import { getMovies } from 'api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();
  
  useEffect(() => {
    const fetchMovie = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          const resulsts = await getMovies(searchQuery);
          setMovies(resulsts);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error('Error fetching movies:', error);
        }
      }
    };
    fetchMovie()
  }, [searchQuery]);
  
  const handleSubmit = async e => {
    e.preventDefault();
    setSearchParams({ query: query});
  };
    
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
    
    return (
      <div>
        {/* <div><Link to >Go back</Link></div> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          name="searchQuery"
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
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.poster_path ? (
                <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.original_title}
                />
                ) : (
                  <div
                  style={{
                    height: '300px',
                    width: '200px',
                    backgroundColor: 'lightgray',
                  }}
                  ></div>
                  )}
                  <div>{movie.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Movies;