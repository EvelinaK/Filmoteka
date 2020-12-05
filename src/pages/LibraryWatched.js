import { navigate } from '../services/Router';
import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';

// const init = async () => {
//   const API = new MovieAPI();
//   const parser = new DOMParser();
//   const DOM = parser.parseFromString(template, 'text/html');
//   const movieList = await API.getTrendingMovies();
//   console.log(movieList);

//   //-------отвечает за смену банера. можно вынести в services
//   const refs = {
//     banner: document.querySelector('.page-header'),
//   };
//   refs.banner.className = 'page-header';
//   refs.banner.classList.add('banner-watched');
//   //-------отвечает за смену банера. можно вынести в services

//   return template;
// };

const init = async () => {
  const API = new MovieAPI();

  return await API.getPopularMovies().then(data => {
    // const { results } = data;
    // console.log(results);
    const duffElem = document.createElement('div');
    duffElem.insertAdjacentHTML('beforeend', Header({ banner: 'watched' }));
    duffElem.insertAdjacentHTML('beforeend', SectionCards()); //results--пебебрасываем в страницу секшн кард как параметр//
    duffElem.insertAdjacentHTML('beforeend', SectionPagination());
    duffElem.insertAdjacentHTML('beforeend', Footer());

    return duffElem.innerHTML;
  });
};
export default init;

// Other functions
