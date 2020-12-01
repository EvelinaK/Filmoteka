import MovieAPI from '../services/MovieAPI';
import Template from '../tamplates/card.hbs';

const template = `
<div id="homePage">
    <div id="wrapper">
        <section class="films__list">
            <div class="cards__films-wrap"></div>
        </section>
    </div>
 </div>
`;

const init = async () => {
  const API = new MovieAPI();
  const parser = new DOMParser();
  const DOM = parser.parseFromString(template, 'text/html');

  const movieList = await API.getPopularMovies();
  console.log(movieList);
  movieList.results.forEach(movie => {
    DOM.querySelector('.cards__films-wrap').insertAdjacentHTML(
      'beforeend',
      Template(movie),
    );
  });

  //-------отвечает за смену банера. можно вынести в services
  const refs = {
    banner: document.querySelector('.page-header'),
  };
  refs.banner.className = 'page-header';
  refs.banner.classList.add('banner-home');
  //-------отвечает за смену банера. можно вынести в services

  // Обязательно возврашщать разметку
  return DOM.querySelector('#homePage').innerHTML;
};

export const addEventHandlers = () => {
  document.querySelector('button').addEventListener('click', event => {
    console.log(event);
  });
};

// Other functions

export default init;
