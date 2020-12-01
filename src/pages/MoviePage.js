import MovieAPI from '../services/MovieAPI';
import details from '../tamplates/movie.hbs';

const init = async params => {
  const API = new MovieAPI();

  const movie = await API.getMoviesById(params.id);
  console.log(movie);

  // Обязательно возврашщать разметку
  return details(movie);
};

export default init;
