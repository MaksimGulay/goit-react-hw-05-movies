import React from 'react';
import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails= lazy(() => import("pages/MovieDetails"));
const Home = lazy(() => import("pages/Home"));
const Cast= lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));
const Layout = lazy(() => import("./Layout"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  );
};
