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


 export const getMovies = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  query: '', // ваш пошуковий запит
    include_adult: false, // включити/виключити фільми для дорослих
    language: 'en-US', // мова запиту
    page: 1, // сторінка результатів
    region: '', // регіон
    year: '', // рік
    primary_release_year: '',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3ZDJhN2IzNjZjOGRkMjBiM2UxN2IxMDQ5NTAyOSIsInN1YiI6IjY0ZmYzOTczZWZlYTdhMDExYWI3N2E5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WfuiyWNSMnK0XUfRzXRBAAegiGGslDwG9EegGgPDSdI'
  }
};