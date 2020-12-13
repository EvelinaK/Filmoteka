import MovieAPI from '../services/MovieAPI';
import { navigate } from '../services/Router';
import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import { renderPagination } from '../components/pagination';

const init = async (query = 'page=1', params) => {
  if (query === '') {
    query = 'page=1';
  }

  const APi = new MovieAPI();
  const queryParams = new URLSearchParams(query);

  const data = await APi.getPopularMovies(queryParams.get('page'));
  const ganres = await APi.getGenres();
  const ganreById = ganres.reduce((acc, item) => {
    return { ...acc, [item.id]: item.name };
  }, {});
  const films = data.results.map(item => {
    return {
      ...item,
      release_date: new Date(item.release_date).getFullYear(),
      genre: item.genre_ids.map(item => ganreById[item]),
    };
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
      paginations: renderPagination(data.page, data.total_pages, '/home'),
    }),
  );
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
};

// Other functions

export default init;

export const addEventHandlers = () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', submitHendler);
};

const submitHendler = async event => {
  event.preventDefault();

  const query = await event.target.querySelector('input[name="text"]').value;
  if (!query || query.trim().length == 0) {
    document.querySelector('.w').classList.add('warning');
    document.querySelector('input[name="text"]').value = '';
    function sayHi() {
      document.querySelector('.w').classList.remove('warning');
    }
    setTimeout(sayHi, 4000);
  } else {
    document.querySelector('.w').classList.remove('warning');
    navigate(`/search?q=${query}`);
  }
};
