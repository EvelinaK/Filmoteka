import MovieAPI from '../services/MovieAPI';
import details from '../tamplates/movie.hbs';

const init = async params => {
  const API = new MovieAPI();
  const parser = new DOMParser();
  const DOM = parser.parseFromString(template, 'text/html');

  const movie = await API.getMoviesById(params.id);
  console.log(movie);

  DOM.querySelector('.cards__films-wrap').insertAdjacentHTML(
    'beforeend',
    details(movie),
  );

  // Обязательно возврашщать разметку
  return DOM.querySelector('#homePage').innerHTML;
};

export default init;
