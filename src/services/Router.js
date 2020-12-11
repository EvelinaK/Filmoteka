import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
} from '../pages/HomePage';
import initLibraryWatched from '../pages/LibraryWatched';
import initMoviePage, {
  addEventHandlers as addMoviePageEventHandlers,
} from '../pages/MoviePage';
import initLibraryQueue from '../pages/LibraryQueue';
import initSearch, {
  addEventHandlers as searchPageEventHandlers,
} from '../pages/SearchPage';

const root = null;
const useHash = true;
const hash = '#';

const router = new Navigo(root, useHash);

export const navigate = path => {
  router.navigate(path);
};

const initRouter = () => {
  debugger;
  router
    .on({
      '/': query => {
        debugger;

        RenderComponent(initHomePage, query).then(() => {
          addHomePageEventHandlers();
        });
      },
      '/search': (query, params) => {
        RenderComponent(initSearch, query, params).then(
          searchPageEventHandlers,
        );
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
        RenderComponent(initMoviePage, params).then(addMoviePageEventHandlers);
      },
    })
    .notFound(function (query) {
      console.log(query);
    })
    .resolve();
};

export default initRouter;
