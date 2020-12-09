import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';

const init = async params => {
  const API = new MovieAPI();

  return await API.getMoviesById(params.id).then(data => {
    console.log(data);
    const duffElem = document.createElement('div');
    duffElem.insertAdjacentHTML(
      'beforeend',
      Header({ banner: 'detalis', btn: 'off', form: 'off' }),
    );
    duffElem.insertAdjacentHTML('beforeend', details(data));
    console.log(data);
    duffElem.insertAdjacentHTML('beforeend', Footer());

    return duffElem.innerHTML;
  });
};

export default init;

//--вешаем обработчик события на кнопки
