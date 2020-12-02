import MovieAPI from '../services/MovieAPI';
import Header from '../tamplates/header.hbs';
import details from '../tamplates/movie.hbs';
import Footer from '../tamplates/footer.hbs';

// const init = async params => {
//   const API = new MovieAPI();
//   const movie = await API.getMoviesById(params.id);
//   console.log(movie);

//   //-------отвечает за смену банера. можно вынести в services
//   const refs = {
//     banner: document.querySelector('.page-header'),
//   };
//   refs.banner.className = 'page-header';
//   refs.banner.classList.add('banner-detalis');
//   //-------отвечает за смену банера. можно вынести в services

//   // Обязательно возврашщать разметку
//   return details(movie);
// };

// elem.classList.toggle('class');

// export default init;

const init = async params => {
  const API = new MovieAPI();

  return await API.getMoviesById(params.id).then(data => {
    // const { results } = data;
    console.log(data);
    const duffElem = document.createElement('div');
    duffElem.insertAdjacentHTML('beforeend', Header());
    duffElem.insertAdjacentHTML('beforeend', details(data));
    duffElem.insertAdjacentHTML('beforeend', Footer());

    return duffElem.innerHTML;
  });
};

export default init;
