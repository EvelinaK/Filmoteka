import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
} from '../pages/HomePage';
import initLibraryPage from '../pages/LibraryPage';

const rootUrl = `${window.location.protocol}//${window.location.host}`;
const root = null;
//const useHash = true;
//const hash = '#!';
//const router = new Navigo(root, useHash, hash);
const router = new Navigo(root);

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
// };

export default initRouter;
