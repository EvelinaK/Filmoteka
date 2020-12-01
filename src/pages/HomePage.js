import MovieAPI from '../services/MovieAPI';
import Template from '../tamplates/card.hbs';
const template = `

<div id="homePage">
    <div id="wrapper">
    <span>Home page title</span>
    <a href="/library">Library</a>
    <button>Ok</button>
<section class="films__list">
  <div class="cards__films-wrap">
  </div>
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
