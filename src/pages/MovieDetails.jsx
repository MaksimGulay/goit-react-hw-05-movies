import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, NavLink, Outlet, useLocation} from 'react-router-dom';
import { getMovieDetailsOptions } from 'api';


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

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
      <NavLink to={backLinkHref}>Back to Movies</NavLink>
      <h2>{movieData.original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
        alt={movieData.original_title}
      />
      <p>Overview: {movieData.overview}</p>
      <div>
        <nav>
          <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
          <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;