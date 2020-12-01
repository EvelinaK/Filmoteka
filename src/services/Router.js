import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
} from '../pages/HomePage';
import initLibraryPage from '../pages/LibraryPage';
import initMoviePage from '../pages/MoviePage';

const root = null;
const useHash = true;
const router = new Navigo(root, useHash);

const initRouter = () => {
  router
    .on('/', () => {
      RenderComponent(initHomePage)
        .then(() => {
          addHomePageEventHandlers();
        })
        .then(() => {
          // RenderComponent(initHomePage);
        })
        .finally(() => {
          console.log('Home page is rendered');
        });
    })
    .on('/library', () => {
      RenderComponent(initLibraryPage);
    })
    .on('/movie/:id', params => {
      RenderComponent(initMoviePage, params);
    })
    .resolve();
  // .on(`/library/:id`, (params, query) => {
  //   //.on(rootUrl + `/library`, () => {
  //   //${rootUrl}
  //   console.log(params);
  //   // RenderComponent(initLibraryPage(params));
  // })
  // .resolve();
};

export const navigate = path => {
  router.navigate(path);
};

export default initRouter;
