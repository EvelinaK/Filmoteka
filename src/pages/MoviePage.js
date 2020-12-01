import MovieAPI from '../services/MovieAPI';
import details from '../tamplates/movie.hbs';

const init = async params => {
  const API = new MovieAPI();
  const movie = await API.getMoviesById(params.id);
  console.log(movie);

  //-------отвечает за смену банера. можно вынести в services
  const refs = {
    banner: document.querySelector('.page-header'),
  };
  refs.banner.className = 'page-header';
  refs.banner.classList.add('banner-detalis');
  //-------отвечает за смену банера. можно вынести в services

  // Обязательно возврашщать разметку
  return details(movie);
};

// elem.classList.toggle("class")

export default init;
