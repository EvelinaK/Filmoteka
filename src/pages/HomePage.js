import MovieAPI from '../services/MovieAPI';

import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import Pagination from '../components/pagination';
const init = async () => {
  const API = new MovieAPI();

  return await API.getPopularMovies().then(data => {
    console.log(data);

    const { results } = data;
    console.log(results);
    const duffElem = document.createElement('div');
    duffElem.insertAdjacentHTML('beforeend', Header());
    duffElem.insertAdjacentHTML('beforeend', SectionCards(results));
    duffElem.insertAdjacentHTML('beforeend', SectionPagination());
    duffElem.insertAdjacentHTML('beforeend', Footer());

    return duffElem.innerHTML;
  });
};

// const init = async () => {
//   const API = new MovieAPI();
//   const parser = new DOMParser();
//   const DOM = parser.parseFromString(template, 'text/html');

//   const movieList = await API.getPopularMovies();
//   console.log(movieList);
//   movieList.results.forEach(movie => {
//     DOM.querySelector('.cards__films-wrap').insertAdjacentHTML(
//       'beforeend',
//       Template(movie),
//     );
//   });

//   //-------отвечает за смену банера. можно вынести в services
//   const refs = {
//     banner: document.querySelector('.page-header'),
//   };
//   refs.banner.className = 'page-header';
//   refs.banner.classList.add('banner-home');
//   //-------отвечает за смену банера. можно вынести в services

//   // Обязательно возврашщать разметку
//   return DOM.querySelector('#homePage').innerHTML;
// };

export const addEventHandlers = () => {
  document.querySelector('button').addEventListener('click', event => {
    console.log(event);
  });

  // document.querySelector('.but').addEventListener('click', event => {
  //   API.incrementPage();
  //   console.log(API);
  // });
};

// Other functions

export default init;
// const init = async () => {
//   return medb.getPopularFilms().then(data => {
//     const { results } = data;
//     console.log(data);
//     const duffElem = document.createElement('div');
//     duffElem.insertAdjacentHTML('beforeend', templateHeader());
//     duffElem.insertAdjacentHTML('beforeend', templateSectionCards());
//     duffElem.insertAdjacentHTML('beforeend', templateSectionPagination());
//     duffElem.insertAdjacentHTML('beforeend', templateFooter());
//     return duffElem.innerHTML;
//   });
// };
