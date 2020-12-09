<<<<<<< HEAD
// import { MAX_SAFE_INTEGER } from 'core-js/fn/number';
import initRouter from './services/Router';

import './styles/main.scss';

// import './styles/style.css';
// import './styles/header/style.css';
// import './styles/header/styles.css';
// import './styles/1/styles.css';
// import './styles/1/media.scss';
// import './styles/cards.scss';
// import 'font-awesome/css/font-awesome.css';
// import 'font-awesome/fonts/fontawesome-webfont.woff';
initRouter();

// const linkLubrary = document.querySelector('.menu-navigation__library'),
//   linkHome = document.querySelector('.menu-navigation__home'),
//   header = document.querySelector('header'),
//   menuLibrary = document.querySelector('.menu-library'),
//   menuSearch = document.querySelector('.menu-search');

// function clickByLubriary(event) {
//   event.preventDefault();
//   if (header.classList.contains('banner-home')) {
//     header.classList.replace('banner-home', 'banner-watched');
//     menuSearch.style.display = 'none';
//     menuLibrary.style.display = 'block';
//   }
// }
// function clickByHome(event) {
//   event.preventDefault();
//   if (header.classList.contains('banner-watched')) {
//     header.classList.replace('banner-watched', 'banner-home');
//     menuLibrary.style.display = 'none';
//     menuSearch.style.display = 'block';
//   }
// }
// linkLubrary.addEventListener('click', clickByLubriary);
// linkHome.addEventListener('click', clickByHome);

const btnWatched = document.querySelector('body');
function buttonW(event) {
    console.dir(event.target);
    console.log('asfafaf');
    // console.log(event.currentTarget);
}
btnWatched.addEventListener('click', buttonW);

const btn = document.querySelector('.menu-navigation__home');

function but(event) {
    console.log(event.target);
    console.log('button');
}
btn.addEventListener('click', but);
=======
import initRouter from './services/Router';
import './styles/styles.css';

initRouter();

const linkLubrary = document.querySelector('.menu-navigation__library'),
  linkHome = document.querySelector('.menu-navigation__home'),
  header = document.querySelector('header'),
  menuLibrary = document.querySelector('.menu-library'),
  menuSearch = document.querySelector('.menu-search');

function clickByLubriary(event) {
  event.preventDefault();
  if (header.classList.contains('banner-home')) {
    header.classList.replace('banner-home', 'banner-watched');
    menuSearch.style.display = 'none';
    menuLibrary.style.display = 'block';
  }
}
function clickByHome(event) {
  event.preventDefault();
  if (header.classList.contains('banner-watched')) {
    header.classList.replace('banner-watched', 'banner-home');
    menuLibrary.style.display = 'none';
    menuSearch.style.display = 'block';
  }
}
linkLubrary.addEventListener('click', clickByLubriary);
linkHome.addEventListener('click', clickByHome);
>>>>>>> 900e5419392afb302609ee05a839b04ad9912570
