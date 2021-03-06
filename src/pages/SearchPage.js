import MovieAPI from '../services/MovieAPI';
import { navigate } from '../services/Router';
import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import { renderPagination } from '../components/pagination';

const init = async (params, query) => {
  // = 'q=&page=1'
  const API = new MovieAPI();
  //const queryParams = new URLSearchParams(params);
  const queryParams = new URLSearchParams(query);

  const root = document.createElement('div');
  try {
    const data = await API.getMoviesByQuery(
      queryParams.get('q'),
      queryParams.get('page'),
    );

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
  } catch (error) {
    console.log('ooo');
    const elError = (document.createElement('p').textContent = 'Ошибка');
    root.insertAdjacentHTML('beforeend', elError);
  }

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

  // debugger;
  // navigate(`/search?q=${query}`);
};
