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

  getPopularMovies() {
    return fetch(
      `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`,
    ).then(res => res.json());
  }

  getMoviesByQuery() {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`,
    ).then(res => res.json());
  }

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
