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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 493d1bcf200f7863abe17abdb76a414b3e58a984
=======

>>>>>>> 0206136cce33bd4c87e55b0fb60c33cc0cb9e039
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
