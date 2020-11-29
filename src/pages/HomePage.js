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
};

// Other functions

export default init;

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


 */
}
