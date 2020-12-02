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

  root.insertAdjacentHTML('beforeend', Header());
  root.insertAdjacentHTML('beforeend', SectionCards(data.results));
  root.insertAdjacentHTML('beforeend', SectionPagination({ paginations: initPagination(data.page, data.total_pages, '/') }));
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
};

export const addEventHandlers = () => {

};

// Other functions

export default init;
