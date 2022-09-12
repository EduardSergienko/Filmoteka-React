import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
// const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';

export async function fetchTrandingFilms(page) {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(`${BASE_URL}?${API_KEY}&page=${page}`);
}

export async function movieSearching(searchQuery) {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(
    `${BASE_URL}?${API_KEY}&query=${searchQuery}&language=en-US`
  );
}

export async function getMovieDetails(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(`${BASE_URL}${id}?${API_KEY}&language=en-US`);
}

export async function getCastDetails(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(`${BASE_URL}${id}/credits?${API_KEY}&language=en-US`);
}

export async function getMovieReviews(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(`${BASE_URL}${id}/reviews?${API_KEY}&language=en-US`);
}

export async function getMovieTrailer(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(`${BASE_URL}${id}/videos?${API_KEY}&language=en-US`);
}
export async function getMovieGenres() {
  const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(`${BASE_URL}?${API_KEY}&language=en-US`);
}
export async function getMovieCountry(id) {
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(`${BASE_URL}${id}?${API_KEY}&language=en-US`);
}
