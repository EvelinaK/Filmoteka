import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';
import LocalStorageApi from '../services/LocalStorage';
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

// export default init;

export const addEventHandlers = () => {
  document.querySelector('.btn-trailer').addEventListener('click', openTrailer);

  document.querySelector('.back-home').addEventListener('click', () => {
    // history.go(-2);
    history.back();
  });
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

  // const watchStore = LocalStorage.get(watch.dataset.lable);

  if (LocalStorage.has(watch.dataset.lable)) {
    const watchStore = LocalStorage.get(watch.dataset.lable);

    if (watchStore.includes(params.id)) {
      watch.checked = true;
    } else {
      watch.checked = false;
    }
  } else {
    return;
  }

  if (LocalStorage.has(queue.dataset.lable)) {
    const queueStore = LocalStorage.get(queue.dataset.lable);

    if (queueStore.includes(params.id)) {
      queue.checked = true;
    } else {
      queue.checked = false;
    }
  } else {
    return;
  }
};

const openTrailer = async event => {
  event.preventDefault();

  const trailler = await API.getMovies(
    event.currentTarget.getAttribute('data-name'),
  );
  console.log(trailler.results[0].key);
  const instance = drawModalForTrailler(trailler.results[0].key);
  instance.show();
};
export default init;
