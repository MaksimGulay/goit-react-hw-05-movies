import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetailsOptions } from 'api';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const options = getMovieDetailsOptions(movieId);

    axios
      .request(options)
      .then(function (response) {
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav><Link to="/">Go back</Link></nav>
      <h2>{movieData.original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
        alt={movieData.original_title}
      />
      <p>Overview: {movieData.overview}</p>
      <div>
        <nav>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;


