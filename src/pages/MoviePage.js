import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';
import { doc } from 'prettier';

const init = async params => {
  const API = new MovieAPI();

  return await API.getMoviesById(params.id).then(data => {
    const duffElem = document.createElement('div');

    duffElem.insertAdjacentHTML(
      'beforeend',
      Header({ banner: 'detalis', btn: 'off', form: 'off' }),
    );
    duffElem.insertAdjacentHTML('beforeend', details(data));
    duffElem.insertAdjacentHTML('beforeend', Footer());

    return duffElem.innerHTML;
  });
};

export const addEventHandlers = () => {
  document
    .querySelector('.btn-watched')
    .addEventListener('click', submitHendler);
};

const submitHendler = async event => {
  console.log('dsafsdafsdf');
};

export default init;
