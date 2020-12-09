import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
<<<<<<< HEAD
  submitHandler as submitHandler,
} from '../pages/HomePage';
import initLibraryWatched from '../pages/LibraryWatched';
import initMoviePage from '../pages/MoviePage';
import initLibraryQueue from '../pages/LibraryQueue';
import initSearch from '../pages/SearchPage';

const root = null;
const useHash = true;
const hash = '#';
//--или true ???
const router = new Navigo(root, useHash);

export const navigate = path => {
  router.navigate(path);
};

const initRouter = () => {
  router
    .on({
      '/': query => {
        RenderComponent(initHomePage, query).then(() => {
          addHomePageEventHandlers();
        });
      },
      '/search': (query, params) => {
        RenderComponent(initSearch, query, params).then(() => {});
      },
      '/library': query => {
        RenderComponent(initLibraryQueue, query);
      },
      '/library/queue': () => {
        RenderComponent(initLibraryQueue);
      },
      '/library/watched': () => {
        RenderComponent(initLibraryWatched);
      },
      '/movie/:id': params => {
        RenderComponent(initMoviePage, params);
      },
    })
    .notFound(function (query) {
      console.log(query);
    })
    .resolve();
  // .on('/', query => {
  //   RenderComponent(initHomePage, query).then(() => {
  //     addHomePageEventHandlers();
  //   });
  // })
  // .on('/library', () => {
  //   RenderComponent(initLibraryQueue);
  // })
  // .on('/search', query => {
  //   RenderComponent(initSearch, query);
  // })
  // .on(`/library/queue`, () => {
  //   RenderComponent(initLibraryQueue);
  // })
  // .on(`/library/watched`, () => {
  //   RenderComponent(initLibraryWatched);
  // })
  // .on('/movie/:id', params => {
  //   RenderComponent(initMoviePage, params);
  // })
  // .resolve();
};

// const initRouter = () => {
//   router
//     .on({
//       '/': query => {
//         RenderComponent(initHomePage, query).then(() => {
//           addHomePageEventHandlers();
//         });
//       },
//       '/:search': (params, query) => {
//         RenderComponent(initSearchQwery, params, query).then(() => {
//           addSearch();
//         });
//       },
//       '/library': query => {
//         RenderComponent(initLibraryQueue, query);
//       },
//       '/library/queue': () => {
//         RenderComponent(initLibraryQueue);
//       },
//       '/library/watched': () => {
//         RenderComponent(initLibraryWatched);
//       },
//       '/movie/:id': params => {
//         RenderComponent(initMoviePage, params);
//       },
//     })
//     .resolve();
// };

// export const navigate = path => {
//   router.navigate(path);
=======
} from '../pages/HomePage';
import initLibraryPage from '../pages/LibraryPage';

const rootUrl = `${window.location.protocol}//${window.location.host}`;
const root = null;
const useHash = true;
const hash = '#!';
const router = new Navigo(root, useHash, hash);
// const router = new Navigo(root);

const initRouter = () => {
  router
    .on('/', () => {
      //.on(rootUrl, () => {
      RenderComponent(initHomePage)
        .then(() => {
          addHomePageEventHandlers();
        })
        .finally(() => {
          console.log('Home page is rendered');
        });
    })
    .on(`/library`, () => {
      //.on(rootUrl + `/library`, () => {
      //${rootUrl}
      RenderComponent(initLibraryPage);
    })
    .resolve();
};
export const navigate = path => {
  router.navigate(path);
};
// export const navigate = path => {
//   router.navigate(rootUrl + path);
>>>>>>> 900e5419392afb302609ee05a839b04ad9912570
// };

export default initRouter;
