import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
} from '../pages/HomePage';
import initLibraryWatched from '../pages/LibraryWatched';
import initMoviePage, {
  addEventOnClickMovieBtn as addMoviePageEventHandlers,
  getMovie as getMovie,
} from '../pages/MoviePage';
import initLibraryQueue from '../pages/LibraryQueue';
import initSearch, {
  addEventHandlers as searchPageEventHandlers,
} from '../pages/SearchPage';

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
