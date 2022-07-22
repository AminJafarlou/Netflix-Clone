const API_KEY = "e09e4410fa71ae15a9035c43d53751a3";
// https://api.themoviedb.org/3/movie/550?api_key=e09e4410fa71ae15a9035c43d53751a3
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDllNDQxMGZhNzFhZTE1YTkwMzVjNDNkNTM3NTFhMyIsInN1YiI6IjYyZDU5ZDI0ZTZkM2NjMDA1MDk2MDQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CnS_Z1N7GzAagJ8cr_zo2KZAHsXyOKyDWQjyEcTP1Js

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
