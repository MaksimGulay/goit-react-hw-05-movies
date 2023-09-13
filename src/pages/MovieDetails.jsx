// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { getMovieDetailsOptions } from 'api';
// // import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';

// const MovieDetails = () => {
//   const [movieData, setMovieData] = useState(null);
//   const { movieId } = useParams();

//   useEffect(() => {
//     const options = getMovieDetailsOptions(movieId);

//     axios
//       .request(options)
//       .then(function (response) {
//         setMovieData(response.data);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   }, [movieId]);

//   if (!movieData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{movieData.original_title}</h2>
//       <img
//         src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
//         alt={movieData.original_title}
//       />
//       <p>Overview: {movieData.overview}</p>
//       <div>
//         {/* <Cast /> */}
//         <Reviews />
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;

// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getMovieDetailsOptions } from 'api';
import CastNew from 'components/Cast';
import Reviews from 'components/Reviews'; // Import Reviews component

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
      <h2>{movieData.original_title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
        alt={movieData.original_title}
      />
      <p>Overview: {movieData.overview}</p>
      <div>
        <CastNew movieId={movieId} />
        <Reviews movieId={movieId} /> {/* Pass the movieId as a prop */}
      </div>
    </div>
  );
};

export default MovieDetails;
