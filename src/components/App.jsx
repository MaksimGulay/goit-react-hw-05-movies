import { Route, Routes, Link } from 'react-router-dom';
import  Movies  from 'pages/Movies';
import  MovieDetails  from 'pages/MovieDetails';
import Home from 'pages/Home';

export const App = () => {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/movies/:movieId"></Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
