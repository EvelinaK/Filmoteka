import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';
import localStorage from '../services/LocalStorage';
import lStorage from '../services/LocalStorage';
import { doc } from 'prettier';

const ATTR_NAME = 'data-filmID';
const ATTR_LS_KEY = 'data-lsKeys';
const KEY_WATCHED = 'watchedKey';
const KEY_QUEUE = 'queueKey';

const init = async params => {
  const API = new MovieAPI();

  return await API.getMoviesById(params.id).then(data => {
    const root = document.createElement('div');

    root.insertAdjacentHTML(
      'beforeend',
      Header({ banner: 'detalis', btn: 'off', form: 'off' }),
    );

    root.querySelector('#search-form');
    root.insertAdjacentHTML('beforeend', details(data));
    root.insertAdjacentHTML('beforeend', Footer());

    // let watched = document.querySelector('.btn-watched');
    // let queue = document.querySelector('.btn-watched');
    // let filmCard = document.querySelector('.details-film');

    // const watchedAttribute = document
    //   .getElementById('myAnchor')
    //   .getAttribute(ATTR_LS_KEY);
    // const queueAttribute = queue.getAttribute(ATTR_LS_KEY);
    // const filmDetailsAttribute = filmCard.detailsFilm.getAttribute(ATTR_NAME);
    // debugger;
    // const storage = new localStorage();

    // if (storage.hasValueToData(KEY_WATCHED, filmDetailsAttribute)) {
    //   document.watched.classList.add('active');
    //   document.watched.innerHTML = 'ADDED TO WATCHED';
    //   debugger;
    // }

    // if (storage.hasValueToData(KEY_QUEUE, filmDetailsAttribute)) {
    //   debugger;
    //   document.queue.classList.add('active');
    //   document.queue.innerHTML = 'ADDED TO QUEUE';
    // }

    return root.innerHTML;
  });
};

export default init;

// const buttonClickHandler = event => {
//   debugger;
//   event.preventDefault();
//   const storage = new lStorage();

//   const checkButton = event.target;
//   const buttonAttrValue = buttonRef.getAttribute('data-lskeys');

//   const movieCardAttribute = document
//     .querySelector('.details-film')
//     .getAttribute(ATTR_NAME);

//   if (storage.hasValueToData(buttonAttrValue, movieCardAttribute)) {
//     debugger;
//     storage.removeToData(buttonAttrValue, movieCardAttribute);
//     checkButton.classList.remove('active');
//     if (buttonAttrValue === 'queueKey') {
//       checkButton.innerHTML = 'ADD TO QUEUE';
//     } else {
//       checkButton.innerHTML = 'ADD TO WATCH';
//     }
//   } else {
//     storage.addToData(buttonAttrValue, movieCardAttribute);
//     checkButton.classList.add('active');
//     if (buttonAttrValue === 'queueKey') {
//       checkButton.innerHTML = 'ADDED TO QUEUE';
//     } else {
//       checkButton.innerHTML = 'ADDED TO WATCH';
//     }
//   }
// };

export const addEventHandlers = () => {
  // document
  //   .querySelector('.btn-watched')
  //   .addEventListener('click', buttonClickHandler);

  // document
  //   .querySelector('.btn-queue')
  //   .addEventListener('click', buttonClickHandler);
  // document
  //   .querySelector('.btn-queue')
  //   .addEventListener('click', buttonClickHandler);
  // document
  //   .querySelector('.btn-queue')
  //   .addEventListener('click', buttonClickHandler);

  document.querySelector('.back-home').addEventListener('click', () => {
    // history.go(-2);
    history.back();
  });
};
