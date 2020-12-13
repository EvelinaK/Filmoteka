import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import LocalStorageApi from '../services/LocalStorage';

const init = data => {
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML(
    'beforeend',
    Header({ banner: 'watched', btn: 'on', form: 'off' }),
  );
  duffElem.insertAdjacentHTML('beforeend', SectionCards(data));
  duffElem.insertAdjacentHTML('beforeend', SectionPagination());
  duffElem.insertAdjacentHTML('beforeend', Footer());

  return duffElem.innerHTML;
};

export const addEventHandlers = () => {
  const watch = document.querySelector('.menu-library__watched');
  const queue = document.querySelector('.menu-library__queue');

  watch.addEventListener('click', onClickBtn);
  queue.addEventListener('click', onClickBtn);
  getMovies('queue');
};

function onClickBtn(event) {
  const key = this.dataset.lable;
  getMovies(key);

  const library = document.querySelectorAll('.menu-library button');
  [...library].forEach(el => {
    el.classList.remove('active');
  });
  event.target.classList.add('active');
}

async function getMovies(key) {
  const LocalStorage = new LocalStorageApi();
  const Movie = new MovieAPI();
  const arr = LocalStorage.get(key);

  const requests = arr.map(id => {
    return Movie.getMoviesById(id);
  });

  const movies = await Promise.all(requests);
  const wrap = document.querySelector('.cards-films__wrap');
  wrap.innerHTML = '';
  wrap.insertAdjacentHTML('beforeend', SectionCards(movies));
}

export default init;
