import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
  sabmitHendler as sabmitHendler,
} from '../pages/HomePage';
import initLibraryWatched from '../pages/LibraryWatched';
import initMoviePage from '../pages/MoviePage';
import initLibraryQueue from '../pages/LibraryQueue';
const root = null;
const useHash = true;
const router = new Navigo(root, useHash);

const initRouter = () => {
  router
    .on(`/search`, params => {
      console.log(params);
      RenderComponent(initMoviePage, params).then(() => {
        sabmitHendler();
      });
    })
    .on('/', query => {
      console.log(query);
      RenderComponent(initHomePage, query)
        .then(() => {
          addHomePageEventHandlers();
        })
        .finally(() => {
          console.log('Home page is rendered');
        });
    })
    .on('/library', () => {
      RenderComponent(initLibraryQueue);
    })
    .on(`/library/queue`, () => {
      RenderComponent(initLibraryQueue);
    })
    .on(`/library/watched`, () => {
      RenderComponent(initLibraryWatched);
    })
    .on('/movie/:id', params => {
      RenderComponent(initMoviePage, params);
    })
    .resolve();
};

export const navigate = path => {
  router.navigate(path);
};

export default initRouter;
