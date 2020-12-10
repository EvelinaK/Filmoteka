import MovieAPI from '../services/MovieAPI';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
import { navigate } from '../services/Router';
import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import { startRender } from '../components/pagination';

const init = async (query = 'page=1') => {
<<<<<<< HEAD
=======
  // const init = async (query, page) => {
  // const API = new MovieAPI();
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
  const APi = new MovieAPI();
  const queryParams = new URLSearchParams(query);
  const data = await APi.getPopularMovies(queryParams.get('page'));
  const ganres = await APi.getGenres();
<<<<<<< HEAD
  const ganreById = ganres.reduce((acc, item) => {
    return { ...acc, [item.id]: item.name };
  }, {});
=======
  console.log(ganres);
  const ganreById = ganres.reduce((acc, item) => {
    return { ...acc, [item.id]: item.name };
  }, {});
  console.log(ganreById);
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
  const films = data.results.map(item => {
    return {
      ...item,
      release_date: new Date(item.release_date).getFullYear(),
      genre: item.genre_ids.map(item => ganreById[item]),
    };
<<<<<<< HEAD
  });

  const root = document.createElement('div');

  root.insertAdjacentHTML(
    'beforeend',
    Header({ banner: 'home', btn: 'off', form: 'on' }),
  );
  root.insertAdjacentHTML('beforeend', SectionCards(films));
  root.insertAdjacentHTML(
    'beforeend',
    SectionPagination({
      paginations: startRender(data.page, data.total_pages, '/'),
    }),
  );
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
=======
  });
  // ---новая работа с апи
  // const Params = new URLSearchParams(query);
  // const dat = await API.insertGenresToMovieObj(Params.get('page'));
  // console.log(dat);

  // const queryParams = new URLSearchParams(query);
  // const data = await API.getPopularMovies(queryParams.get('page'));
  // console.log(data);
  const root = document.createElement('div');

  root.insertAdjacentHTML(
    'beforeend',
    Header({ banner: 'home', btn: 'off', form: 'on' }),
  );
  root.insertAdjacentHTML('beforeend', SectionCards(films));

  root.insertAdjacentHTML(
    'beforeend',
    SectionPagination({
      paginations: startRender(data.page, data.total_pages, '/'),
    }),
  );
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
=======
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

// const movieCard = data => `
//   <div>
//     <span class="title">${data.original_title}</span>
//   </div>
// `;

const init = async () => {
  const API = new MovieAPI();
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
  });

  // Обязательно возврашщать разметку
  return DOM.querySelector('#homePage').innerHTML;
};

export const addEventHandlers = () => {
  document.querySelector('button').addEventListener('click', event => {
    console.log(event);
  });
>>>>>>> 900e5419392afb302609ee05a839b04ad9912570
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
};

// Other functions

export default init;

<<<<<<< HEAD
=======
<<<<<<< HEAD
//{{#each genres}}{{name}}{{#if @last}}{{else}}, {{/if}}{{/each}} |
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
export const addEventHandlers = () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', submitHendler);
};
<<<<<<< HEAD
=======

const submitHendler = async event => {
  event.preventDefault();
  const query = event.target.querySelector('input[name="text"]').value;

  navigate(`/search?q=${query}`);
};
=======
{
  /* <div id="wrapper">
<section class="films__list">
  <div class="cards__films-wrap">
    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>
      <span class="card__film-rating">10.0</span>
    </div>
    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>
      <span class="card__film-rating">10.0</span>
    </div>

    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>
      <span class="card__film-rating">10.0</span>
    </div>

    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>
      <span class="card__film-rating">10.0</span>
    </div>

    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>
      <span class="card__film-rating">10.0</span>
    </div>

    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>
      <span class="card__film-rating">10.0</span>
    </div>

    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>
      <span class="card__film-rating">10.0</span>
    </div>

    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>
      <span class="card__film-rating">10.0</span>
    </div>

    <div class="card__item-film">
      <img class="card__img" src="img/Rectangle 5.png" alt="" width="274" height="398" />
      <h4 class="card__film-name">GREYHOUND</h4>
      <p class="card__film-info">Drama, Action | 2020</p>

      <span class="card__film-rating">10.0</span>
    </div>
  </div>
  <div id="pagination">
    <ul>
      <li class="page-item previous no">
        <a onclick="createPagination(pages, 12)">
          <img class="control" src="./img/arrow-right.png" alt=""></a></li>
      <li class="no page-item"><a onclick="createPagination(pages, 1)">1</a></li>
      <li class="out-of-range"><a onclick="createPagination(pages,11)">...</a></li>
      <li class="page-item no"><a onclick="createPagination(pages, 12)">12</a></li>
      <li class="page-item no"><a onclick="createPagination(pages, 12)">13</a></li>
      <li class="page-item active"><a onclick="createPagination(pages, 14)">14</a></li>
      <li class="page-item no"><a onclick="createPagination(pages, 14)">15</a></li>
      <li class="page-item no"><a onclick="createPagination(pages, 14)">15</a></li>
      <li class="out-of-range"><a onclick="createPagination(pages,15)">...</a></li>
      <li class="page-item no"><a onclick="createPagination(pages, pages)">25</a></li>
      <li class="page-item next no"><a onclick="createPagination(pages, 14)">
          <img class="control" src="./img/arrow-left.png" alt=""></a></li>
    </ul>
  </div>
</section>
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6

const submitHendler = async event => {
  event.preventDefault();
  const query = event.target.querySelector('input[name="text"]').value;

<<<<<<< HEAD
  navigate(`/search?q=${query}`);
};
=======
 */
}
>>>>>>> 900e5419392afb302609ee05a839b04ad9912570
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
