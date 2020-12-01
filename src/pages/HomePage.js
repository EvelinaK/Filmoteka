import API from '../services/MovieAPI';
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
<button class="more">more</button>
    </div>
 </div>
`;

// const movieCard = data => `
//   <div>
//     <span class="title">${data.original_title}</span>
//   </div>
// `;

const init = async () => {
  const parser = new DOMParser();
  const DOM = parser.parseFromString(template, 'text/html');

  const movieList = await API.getPopularMovies();
  console.log(movieList);
  movieList.results.forEach(movie => {
    // DOM.querySelector('div').insertAdjacentHTML('beforeend', movieCard(movie));
    DOM.querySelector('.cards__films-wrap').insertAdjacentHTML(
      'beforeend',
      Template(movie),
    );
    // document.querySelector('more').addEventListener('click', event => {
    //   API.incrementPage();
    // });
  });

  // Обязательно возврашщать разметку
  return DOM.querySelector('#homePage').innerHTML;
};

export const addEventHandlers = () => {
  document.querySelector('button').addEventListener('click', event => {
    console.log(event);
  });

  document.querySelector('.more').addEventListener('click', event => {
    API.incrementPage();
    console.log(API);
  });
};

// Other functions

export default init;
