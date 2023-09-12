import axios from "axios";

export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI'
  }
};

export const getMovieDetailsOptions = (movieId) => {
    return {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI'
      }
    };
  };


  export const getMovies = async (query) => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          include_adult: false,
          language: 'en-US',
          query: query,
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI',
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };
  