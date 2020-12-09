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

<<<<<<< HEAD
  getPopularMovies(page) {
    return fetch(
      `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
  }
  getTrendingMovies() {
    return fetch(
      `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`,
    ).then(res => res.json());
  }

  getMoviesByQuery(searchQuery, page = 1) {
    return fetch(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchQuery}`,
    ).then(res => res.json());
  }

  getMoviesById(movieid) {
    return fetch(
      `${BASE_URL}/3/movie/${movieid}?api_key=${API_KEY}&language=en-US`,
    ).then(res => res.json());
  }
  getGenres() {
    return fetch(
      `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    )
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }

  async insertGenresToMovieObj() {
    const genreList = await this.fetchGenres();
    this.getPopularMovies().then(datas => {
      let data = Object.assign({}, datas);
      data.results.forEach(result => {
        Object.defineProperty(result, 'genreNames', {
          value: {},
        });

        result.genre_ids.forEach(genreId => {
          Object.defineProperty(result.genreNames, String(genreId), {
            writable: true,
          });
          result.genreNames[genreId] = genreList.find(
            genre => genre.id == genreId,
          ).name;
          console.log(result.genreNames);
        });
      });
      console.log(data.results);
      // genreList.map(genre => ({
      //   release_date: genre.release_date.split('-')[0],
      //   genres: genre.genre_ids
      //     .map(id => genresList.filter(el => el.id === id))
      //     .flat(),
      // }));
    });
  }

  // async insertGenresToMovieObj() {
  //   const genreList = await this.fetchGenres();
  //   this.getPopularMovies().then(data => {
  //     data.results.forEach(result => {
  //       Object.defineProperty(result, 'genreNames', {
  //         value: {},
  //       });

  //       result.genre_ids.forEach(genreId => {
  //         Object.defineProperty(result.genreNames, String(genreId), {
  //           writable: true,
  //         });
  //         result.genreNames[genreId] = genreList.find(
  //           genre => genre.id == genreId,
  //         ).name;
  //         console.log(result.genreNames);
  //       });
  //     });
  //     console.log(data.results);
  //   });
  // }

  // insertGenresToSearchObj() {
  //   return this.fetchSearchArticles().then(data => {
  //     return this.fetchGenres().then(genresList => {
  //       let release_date;
  //       return data.map(movie => ({
  //         ...movie,
  //         release_date: movie.release_date
  //           ? movie.release_date.split('-')[0]
  //           : 'n/a',
  //         genres: movie.genre_ids
  //           ? movie.genre_ids
  //               .map(id => genresList.filter(el => el.id === id))
  //               .flat()
  //           : 'n/a',
  //       }));
  //     });
  //   });
  // }

=======
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

>>>>>>> 900e5419392afb302609ee05a839b04ad9912570
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
