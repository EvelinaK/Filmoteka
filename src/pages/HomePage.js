import MovieAPI from '../services/MovieAPI';

import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import { initPagination } from '../components/pagination';

const init = async (query = 'page=1') => {
  const API = new MovieAPI();
  const queryParams = new URLSearchParams(query);
  const data = await API.getPopularMovies(queryParams.get('page'));
  const root = document.createElement('div');

  root.insertAdjacentHTML(
    'beforeend',
    Header({ banner: 'home', btn: 'off', form: 'on' }),
  );
  root.insertAdjacentHTML('beforeend', SectionCards(data.results));
  console.log(data.results);
  root.insertAdjacentHTML(
    'beforeend',
    SectionPagination({
      paginations: initPagination(data.page, data.total_pages, '/'),
    }),
  );
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
};

export const addEventHandlers = () => {};

// Other functions

export default init;

export const sabmitHendler = async event => {
  // event.preventDefault();
  const searchQuery = event.target.querySelector('input[name="text"]').value;
  // const textError = document.querySelector('.search__libraryFilmList');

  if (searchQuery !== '') {
    const data = await API.getMoviesByQuery(searchQuery);
    console.log(data);
    const { total_results } = data;
    if (total_results === 0) {
      // textError.classList.remove('headen');
      console.log(
        'Search result not successful. Enter the correct movie name and',
      );
    } else {
      console.log(`${total_results}кол фильмов`);
      // results.forEach(element => {
      //   if (element.title === searchQuery) {
      //     console.log(element);
      //   }
      // });
    }
    event.target.reset();
    console.log(searchQuery);
  }
};

const sabmitWatched = event => {
  console.log(event);
};

const sabmitQueue = event => {
  console.log(event);
};

// export const addEventHandlers = () => {
//   document
//     .querySelector('.search__navLibraryBtn-Watched')
//     .addEventListener('click', sabmitWatched);
//   document
//     .querySelector('.search__navLibraryBtn-Queue')
//     .addEventListener('click', sabmitQueue);

//   document
//     .querySelector('.form-search')
//     .addEventListener('submit', sabmitHendler);
// };
