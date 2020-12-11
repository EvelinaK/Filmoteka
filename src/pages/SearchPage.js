import MovieAPI from '../services/MovieAPI';
import { navigate } from '../services/Router';
import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import { renderPagination } from '../components/pagination';

const init = async (query, params = 'q=&page=1') => {
  const API = new MovieAPI();
  const queryParams = new URLSearchParams(params);

  const data = await API.getMoviesByQuery(
    queryParams.get('q'),
    queryParams.get('page'),
  );
  console.log(params);
  const root = document.createElement('div');

  root.insertAdjacentHTML(
    'beforeend',
    Header({ banner: 'home', btn: 'off', form: 'on' }),
  );
  root.insertAdjacentHTML('beforeend', SectionCards(data.results));
  root.insertAdjacentHTML(
    'beforeend',
    SectionPagination({
      paginations: renderPagination(
        data.page,
        data.total_pages,
        '/search',
        `&q=${queryParams.get('q')}`,
      ),
    }),
  );
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
};

export default init;

export const addEventHandlers = () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', submitHendler);
};

const submitHendler = async event => {
  event.preventDefault();
  const query = event.target.querySelector('input[name="text"]').value;

  navigate(`/search?q=${query}`);
};
