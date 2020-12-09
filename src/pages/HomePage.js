import MovieAPI from '../services/MovieAPI';
import { navigate } from '../services/Router';
import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import { startRender } from '../components/pagination';

const init = async (query = 'page=1') => {
  // const init = async (query, page) => {
  // const API = new MovieAPI();
  const APi = new MovieAPI();
  const queryParams = new URLSearchParams(query);
  const data = await APi.getPopularMovies(queryParams.get('page'));
  const ganres = await APi.getGenres();
  console.log(ganres);
  const ganreById = ganres.reduce((acc, item) => {
    return { ...acc, [item.id]: item.name };
  }, {});
  console.log(ganreById);
  const films = data.results.map(item => {
    return {
      ...item,
      release_date: new Date(item.release_date).getFullYear(),
      genre: item.genre_ids.map(item => ganreById[item]),
    };
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
};

// Other functions

export default init;

//{{#each genres}}{{name}}{{#if @last}}{{else}}, {{/if}}{{/each}} |
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
