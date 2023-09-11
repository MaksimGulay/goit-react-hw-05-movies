import { Route, Routes, Link } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <div>
        {/* header */}
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          <Link to="/movies/:movieId"></Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
