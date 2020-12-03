const API_KEY = 'c9dbb26251861a1346679dbaca9697b5';

const BASE_URL = 'https://api.themoviedb.org';

export default class MovieAPI {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  resetPage() {
    this.page = 1;
  }

  getPopularMovies(page) {
    return fetch(
      `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    ).then(res => res.json());
  }
  getTrendingMovies() {
    return fetch(
      `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`,
    ).then(res => res.json());
  }

  getMoviesByQuery(qwery, page) {
    return fetch(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&language=en-US&page=${this.page}`,
    ).then(res => res.json());
  }

  getMoviesById(movieid) {
    return fetch(
      `${BASE_URL}/3/movie/${movieid}?api_key=${API_KEY}&language=en-US`,
    ).then(res => res.json());
  }
  // https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos
  // https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
  get SearchQuery() {
    return this.searchQuery;
  }

  set SearchQuery(string) {
    this.searchQuery = string;
  }

  get pageNum() {
    return this.page;
  }

  set pageNum(newNum) {
    this.page = newNum;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
