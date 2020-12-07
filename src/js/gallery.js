import service from '../services/gallery-Service';
import cardTemplate from '../templates/card.hbs';
import { refs } from './refs.js';
// import * as InfiniteScroll from 'infinite-scroll';
////////-----------------ссылки на элементы--------------------------------------/////////

////////-----------------обработчики события --------------------------------------/////////
// refs.$searchForm.addEventListener('submit', searchformSubmitHandler);
// refs.$loadMorebutton.addEventListener('click', loadMorebuttonHandler);
// refs.$galleryList.addEventListener('click', openModalImg);

////////-----------------поиск картинок в форме--------------------------------------/////////
//

// function searchformSubmitHandler(e) {
//   e.preventDefault();
//   if (this.query.value === service.SearchQuery) {
//     return;
//   }

//   const form = e.currentTarget;
//   const input = form.elements.query;
//   clearCountries();
//   service.resetPage();

//   service.SearchQuery = input.value;
//   toggleLoader();
//   infScroll.loadNextPage();
//   // service
//   //   .fetchGallery()
//   //   .then(gallery => {
//   //     updateGalleryList(gallery);
//   //   })
//   //   .catch(error => {
//   //     console.warn(error);
//   //   })
//   //   .finally(() => {
//   //     toggleLoader();
//   //   });

//   input.value = '';
// }
////////-----------------подгрузка дополнительных картинок--------------------------------------/////////
function loadMorebuttonHandler() {
  toggleLoader();
  service
    .fetchGallery()
    .then(hits => {
      updateGalleryList(hits);
      setTimeout(() => {
        window.scrollTo({
          bottom: 0,
          behavior: 'smooth',
        });
      }, 1000);
    })
    .catch(error => {
      console.warn(error);
    })
    .finally(() => {
      toggleLoader();
    });
}

////////-----------------отрисовка карточек галереи на странице -----------------------------/////////
function updateGalleryList(items) {
  const markup = cardTemplate(items);
  refs.$galleryCont.insertAdjacentHTML('beforeend', markup);
}
////////-----------------очистка галереи после поиска картинок------------------------------/////////

export const clearCountries = () => {
  refs.$galleryCont.innerHTML = '';
};
////////-----------------loader для галереи------------------------------/////////
export const toggleLoader = () => {
  refs.$ldsHeart.classList.toggle('loaded');
};

//////-----------------бесконечный скролл------------------------------/////////

// infScroll;
// const PIXABAY_API_KEY = '18964408-9430149bbed18e9d9e56d5420';

// const API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`;

// const gallery = document.querySelector('#galleryCont');
// const options = {
//   path: function () {
//     return `${API_URL}&q=${this.query}&page=${this.pageIndex}&per_page=12&image_type=photo&orientation=horizontal`;
//   },
//   append: '.cards',
//   status: '.scroll-status',
//   history: false,
// };

// gallery.addEventListener('load.infiniteScroll', function (event, response) {
//   console.log(response);
//   // parse response into JSON data
//   const data = JSON.parse(response);
//   // compile data into HTML
//   const itemsHTML = cardTmpl(data.hits);
//   // convert HTML string into elements
//   const items = document.querySelector(itemsHTML);
//   // append item elements
//   items.imagesLoaded(function () {
//     gallery.infiniteScroll('appendItems', $items);
//   });
// });

// // load initial page
// gallery.infiniteScroll('loadNextPage');

// var infScroll = new InfiniteScroll('#galleryCont', options);
// element argument can be a selector string
//   for an individual element
// var infScroll = new InfiniteScroll('.container', {
//   // options
// });

// function getPenPath() {
//   var slug = nextPenSlugs[ this.loadCount ];
//   return 'https://s.codepen.io/desandro/debug/' + slug;
// }
// jQueryBridget( 'infiniteScroll', InfiniteScroll, $ );
// const PIXABAY_API_KEY = '18874263-8f02838ab97d9dd90f7110125';
