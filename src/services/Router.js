import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
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
        .then(() => {
          // RenderComponent(initHomePage);
        })
        .finally(() => {
          console.log('Home page is rendered');
        });
    })
    .on('/library', () => {
      //.on(rootUrl, () => {
      console.log();
      RenderComponent(initLibraryPage);
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

// export const navigate = path => {
//   router.navigate(rootUrl + path);
// };

export default initRouter;
