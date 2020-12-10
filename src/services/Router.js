import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
  submitHandler as submitHandler,
} from '../pages/HomePage';
import initLibraryWatched from '../pages/LibraryWatched';
import initMoviePage from '../pages/MoviePage';
import initLibraryQueue from '../pages/LibraryQueue';
import initSearch from '../pages/SearchPage';

const root = null;
const useHash = false;
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
// };

export default initRouter;
