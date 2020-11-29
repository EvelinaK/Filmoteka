import './styles/style.css'


"use strict";

const linkLubrary = document.querySelector('.menu-navigation__library'),
      linkHome = document.querySelector('.menu-navigation__home'),
      header = document.querySelector('header'),
      menuLibrary = document.querySelector('.menu-library'),
      menuSearch = document.querySelector('.menu-search');

function clickByLubriary(event) {
    event.preventDefault();
    if(header.classList.contains('banner-home')) {
        header.classList.replace('banner-home','banner-watched')
        menuSearch.style.display = 'none';
        menuLibrary.style.display = 'block';
    }
}
function clickByHome(event) {
    event.preventDefault();
    if(header.classList.contains('banner-watched')) {
        header.classList.replace('banner-watched','banner-home');
        menuLibrary.style.display = 'none';
        menuSearch.style.display = 'block';
    }
}
linkLubrary.addEventListener('click', clickByLubriary);
linkHome.addEventListener('click', clickByHome);