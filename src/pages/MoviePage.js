import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';
<<<<<<< HEAD
import { doc } from 'prettier';
=======
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6

const init = async params => {
  const API = new MovieAPI();

  return await API.getMoviesById(params.id).then(data => {
<<<<<<< HEAD
    const duffElem = document.createElement('div');

=======
    console.log(data);
    const duffElem = document.createElement('div');
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
    duffElem.insertAdjacentHTML(
      'beforeend',
      Header({ banner: 'detalis', btn: 'off', form: 'off' }),
    );
    duffElem.insertAdjacentHTML('beforeend', details(data));
<<<<<<< HEAD
=======
    console.log(data);
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
    duffElem.insertAdjacentHTML('beforeend', Footer());

    return duffElem.innerHTML;
  });
};

<<<<<<< HEAD
export const addEventHandlers = () => {
  document
    .querySelector('.btn-watched')
    .addEventListener('click', submitHendler);
};

const submitHendler = async event => {
  console.log('dsafsdafsdf');
};

export default init;
=======
export default init;

//--вешаем обработчик события на кнопки
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
