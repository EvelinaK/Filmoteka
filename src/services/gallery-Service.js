// const baseUrl = 'https://pixabay.com/api/';

// export default {
//   page: 1,
//   query: '',
//   key: '18964408-9430149bbed18e9d9e56d5420',
//   path() {
//     const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`;
//     this.incrementPage();
//     return baseUrl + requestParams;
//   },
//   fetchGallery() {
//     const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`;
//     return fetch(baseUrl + requestParams)
//       .then(res => res.json())
//       .then(({ hits }) => {
//         this.incrementPage();
//         return hits;
//       });
//   },
//   get SearchQuery() {
//     return this.query;
//   },
//   set SearchQuery(string) {
//     return (this.query = string);
//   },

//   incrementPage() {
//     this.page += 1;
//   },
//   resetPage() {
//     this.page = 1;
//   },
// };

const API_KEY = '19016514-f636b8f63ee9a8d1bcb803743';
const BASE_URL = 'https://pixabay.com/api/';
const CORS = 'https://cors-anywhere.herokuapp.com/';

export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  resetPage() {
    this.page = 1;
  }

  getQueryPath() {
    return `${CORS}${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    // return `${CORS}${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${this.pageIndex}&per_page=12`;
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

// const API_KEY = '19016514-f636b8f63ee9a8d1bcb803743';
// const BASE_URL = 'https://pixabay.com/api/';
// const CORS = 'https://cors-anywhere.herokuapp.com/';

// export default class ImagesApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.key = '18964408-9430149bbed18e9d9e56d5420';
//   }

//   // async fetchImages() {
//   //   const url = `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12`;

//   //   const response = await fetch(url);
//   //   const images = await response.json();

//   //   return images;
//   // }
