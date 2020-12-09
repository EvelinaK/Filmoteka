const API_KEY = 'c9dbb26251861a1346679dbaca9697b5';

const BASE_URL = 'https://api.themoviedb.org';

export default class newApiFilm {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  resetPage() {
    this.page = 1;
  }

  getQueryPath() {
    return `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    // return `${CORS}${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${this.pageIndex}&per_page=12`;
    // .then(response => response.json())
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
