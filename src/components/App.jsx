// import { Route, Routes, Link } from 'react-router-dom';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Home from 'pages/Home';

// export const App = () => {
//   return (
//     <div>
//       <div>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/movies">Movies</Link>
//         </nav>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId/*" element={<MovieDetails />} />
//       </Routes>
//     </div>
//   );
// };


import { Route, Routes, Link, Outlet } from 'react-router-dom';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Home from 'pages/Home';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

export const App = () => {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails />}
        >
          <Route index element={<Outlet />} />
          <Route
            path="cast"
            element={<Cast />}
          />
          <Route
            path="reviews"
            element={<Reviews />}
          />
        </Route>
      </Routes>
    </div>
  );
};
