import { navigate } from '../services/Router';
import MovieAPI from '../services/MovieAPI';
import Template from '../tamplates/card.hbs';
const template = `
  <div>
    <span>Library page title</span>
    <a href="/">Home</a>
  </div>
`;

const init = async () => {
  const API = new MovieAPI();
  const parser = new DOMParser();
  const DOM = parser.parseFromString(template, 'text/html');
  const movieList = await API.getTrendingMovies();
  console.log(movieList);
  const id = await API.getMoviesById();
  console.log(id);
  const q = await API.getMoviesByQuery();
  console.log(q);

  //-------отвечает за смену банера. можно вынести в services
  const refs = {
    banner: document.querySelector('.page-header'),
  };
  refs.banner.className = 'page-header';
  refs.banner.classList.add('banner-watched');
  //-------отвечает за смену банера. можно вынести в services

  return template;
};

export default init;

// Other functions
