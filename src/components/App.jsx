import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Home from 'pages/Home';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route element={<Cast />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
