import Navigo from 'navigo';
import RenderComponent from './Component';

import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
} from '../pages/HomePage';
import initMoviePage, {
  addEventHandlers as addMoviePageEventHandlers,
  getMovie as getMovie,
} from '../pages/MoviePage';
import initLibraryQueue, {
  addEventHandlers as addLibraryPageEventHandlers,
  // onClickBtn as onClickBtnLibrary,
} from '../pages/LibraryQueue';

import initSearch, {
  addEventHandlers as searchPageEventHandlers,
} from '../pages/SearchPage';

const root = null;
const useHash = true;
const hash = '#';

const router = new Navigo(root, useHash);

const initRouter = () => {
  router
    .on({
      '/': query => {
        RenderComponent(initHomePage, query).then(() => {
          addHomePageEventHandlers();
        });
      },
      '/:action': (query, params) => {
        if (query.action === 'home') {
          RenderComponent(initHomePage, params).then(() => {
            addHomePageEventHandlers();
          });
        } else if (query.action === 'search') {
          RenderComponent(initSearch, query, params).then(() => {
            searchPageEventHandlers();
          });
        }
      },
      '/library/library': (params, query) => {
        navigate('/library/queue');
      },
      '/library/queue': () => {
        RenderComponent(initLibraryQueue).then(() => {
          addLibraryPageEventHandlers();
        });
      },
      '/movie/:id': params => {
        RenderComponent(initMoviePage, params).then(() => {
          addMoviePageEventHandlers(), getMovie(params);
        });
      },
    })
    .notFound(function (query) {
      console.log(query);
    })
    .resolve();
};

export default initRouter;

export const navigate = path => {
  router.navigate(path);
};
