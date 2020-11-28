import MovieAPI from '../services/MovieAPI';

const template = `
  <div id="homePage">
    <span>Home page title</span>
    <a href="/library">Library</a>

    <button>Ok</button>
  </div>
`;

const movieCard = data => `
  <div>
    <span class="title">${data.original_title}</span>
  </div>
`;

const init = async () => {
  const API = new MovieAPI();
  const parser = new DOMParser();
  const DOM = parser.parseFromString(template, 'text/html');

  const movieList = await API.getPopularMovies();

  movieList.results.forEach(movie => {
    DOM.querySelector('div').insertAdjacentHTML('beforeend', movieCard(movie));
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
