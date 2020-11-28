import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, { addEventHandlers as addHomePageEventHandlers } from '../pages/HomePage';
import initLibraryPage from '../pages/LibraryPage';

const root = null;
const useHash = true;
const hash = '#!';
const router = new Navigo(root, useHash, hash);

const initRouter = () => {
  router
    .on('/', () => {
      RenderComponent(initHomePage)
        .then(() => {
          addHomePageEventHandlers();
        })
        .finally(() => {
          console.log('Home page is rendered')
        });
    })
    .on('/library', () => {
      RenderComponent(initLibraryPage);
    })
    .resolve();
};

export const navigate = path => {
  router.navigate(path);
};

export default initRouter;
