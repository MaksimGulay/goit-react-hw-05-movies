
// // MovieDetails.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link, Routes, Route} from 'react-router-dom';
// import { getMovieDetailsOptions } from 'api';
// import CastNew from 'components/Cast';
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
//         <nav><Link to={`/movies/${movieId}/cast`}>Cast</Link>
//           <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
//         </nav>
        
//         <Routes>
//   <Route
//     path="/movies/:movieId/cast"
//     element={<CastNew movieId={movieId} />}
//   />
//   <Route
//     path="/movies/:movieId/reviews"
//     element={<Reviews movieId={movieId} />}
//   />
// </Routes>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import { getMovieDetailsOptions } from 'api';
// // import Cast from 'components/Cast';
// // import Reviews from 'components/Reviews';

// // const MovieDetails = () => {
// //   const [movieData, setMovieData] = useState(null);
// //   const { movieId } = useParams();

// //   useEffect(() => {
// //     const fetchMovieDetails = async () => {
// //       try {
// //         const options = getMovieDetailsOptions(movieId);
// //         const response = await axios.request(options);
// //         setMovieData(response.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchMovieDetails();
// //   }, [movieId]);

// //   if (!movieData) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div>
// //       <h2>{movieData.original_title}</h2>
// //       <img
// //         src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
// //         alt={movieData.original_title}
// //       />
// //       <p>Overview: {movieData.overview}</p>
// //       <div>
// //         <Cast movieId={movieId} />
// //         <Reviews movieId={movieId} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default MovieDetails;


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


