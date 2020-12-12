import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';
import LocalStorageApi from '../services/storage';
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

export const addEventOnClickMovieBtn = () => {
  const watch = document.querySelector('.btn-watched');
  const queue = document.querySelector('.btn-queue');

  watch.addEventListener('click', onClickBtn);
  queue.addEventListener('click', onClickBtn);
};

function onClickBtn() {
  const LocalStorage = new LocalStorageApi();

  if (this.checked) {
    LocalStorage.addToData(this.dataset.lable, this.dataset.id);
  } else {
    LocalStorage.removeToData(this.dataset.lable, this.dataset.id);
  }
}

export const getMovie = params => {
  const watch = document.querySelector('.btn-watched');
  const queue = document.querySelector('.btn-queue');

  const LocalStorage = new LocalStorageApi();

  const watchStore = LocalStorage.get(watch.dataset.lable);
  if (watchStore.includes(params.id)) {
    watch.checked = true;
  } else {
    watch.checked = false;
  }

  const queueStore = LocalStorage.get(queue.dataset.lable);
  if (queueStore.includes(params.id)) {
    queue.checked = true;
  } else {
    queue.checked = false;
  }
};

export default init;
