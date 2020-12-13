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

/*
export const addEventHandlers = () => {
  const mediaQuery = window.matchMedia(MEDIA_MediumQuery);
  mediaQuery.addListener(event => {
    paginationRef = document.querySelector('.pagination');
    pageRef = paginationRef.querySelector('.item__border-active');
    if (pageRef) {
      paginationRef.querySelector('numpage__lists').innerHTML = paginationInit({
        page: pageRef.textContent,
        total_pages: pageRef.dataset.totalPages,
      });
    }
  });
};
*/

const submitHendler = async event => {
  event.preventDefault();
  const query = event.target.querySelector('input[name="text"]').value;
  debugger;
  navigate(`/search?q=${query}`);
};
