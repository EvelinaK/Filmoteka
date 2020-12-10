import MovieAPI from '../services/MovieAPI';
import { navigate } from '../services/Router';
import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import { startRender } from '../components/pagination';

const init = async (query, params = 'q=&page=1') => {
  const API = new MovieAPI();
  const queryParams = new URLSearchParams(params);

  const data = await API.getMoviesByQuery(
    queryParams.get('q'),
    queryParams.get('page'),
<<<<<<< HEAD
  );
  console.log(params);
=======
    //-нужно получать и передавать
  );

>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
  const root = document.createElement('div');

  root.insertAdjacentHTML(
    'beforeend',
    Header({ banner: 'home', btn: 'off', form: 'on' }),
  );
  root.insertAdjacentHTML('beforeend', SectionCards(data.results));
<<<<<<< HEAD
  root.insertAdjacentHTML(
    'beforeend',
    SectionPagination({
      paginations: startRender(
        data.page,
        data.total_pages,
        '/search',
        `&q=${queryParams.get('q')}`,
      ),
=======

  root.insertAdjacentHTML(
    'beforeend',
    SectionPagination({
      paginations: startRender(data.page, data.total_pages, '/search'),
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
    }),
  );
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
};

<<<<<<< HEAD
export default init;

=======
// Other functions

export default init;

//{{#each genres}}{{name}}{{#if @last}}{{else}}, {{/if}}{{/each}} |
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
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
