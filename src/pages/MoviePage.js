import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';
// import ModalMovie from '../tamplates/modalMovieTrailer.hbs';

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

// --откррываем модальное окно

// const refs = {
// img : document.querySelector (".lightbox__image")
// lightBox : document.querySelector(".lightbox"),
// }

// refs.img.insertAdjacentHTML('afterend', ModalMovie);

// const openModal = (event) => {
//   if( event.target.classList.contains('details-film__img')); {
//     event.preventDefault();
//     refs.lightBox.classList.add("is-open");
//     refs.img.src = event.target.dataset.source;
//     refs.img.alt = event.target.alt;
//     document.addEventListener("keydown", onPressEscape);

//   }
// }

// refs.gallery.addEventListener("click", openModal);
