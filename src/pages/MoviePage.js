import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';
import { drawModalForTrailler } from '../components/modal';

let API = new MovieAPI();

const init = async params => {
  const data = await API.getMoviesById(params.id);
  const trailer = await API.getMovies(params.id);

  const root = document.createElement('div');

  root.insertAdjacentHTML(
    'beforeend',
    Header({ banner: 'detalis', btn: 'off', form: 'off' }),
  );

  root.querySelector('#search-form');
  root.insertAdjacentHTML('beforeend', details(data));
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
};

export default init;

export const addEventHandlers = () => {
  document;

  document.querySelector('.btn-trailer').addEventListener('click', openTrailer);

  document.querySelector('.back-home').addEventListener('click', () => {
    // history.go(-2);
    history.back();
  });
};

const openTrailer = async event => {
  event.preventDefault();
  debugger;
  const trailler = await API.getMovies(event.target.getAttribute('data-name'));
  console.log(trailler.results[0].key);
  const instance = drawModalForTrailler(trailler.results[0].key);
  instance.show();
};
