import Navigo from 'navigo';

// const Router = {
//   router: null,
//   getRouter() {
//     if (!this.router) {
//       const rootUrl = `${window.location.protocol}//${window.location.host}`;
//       this.router = new Navigo(rootUrl, false);
//     }
//     return this.router;
//   },
// };

// export default Router;
let root = null;
let useHash = true;
let router = new Navigo(root, useHash);

router
  .on('/', function () {
    let indexTemplate = Handlebars.compile(indexHtml);
    let indexTemplateRendered = indexTemplate({
      fullname: 'tets',
      allCategoriesCost: 2211,
    });
    //console.log(indexHtml)

    document.querySelector('.js-app').innerHTML = indexTemplateRendered;
  })
  .on('/categories/:id', ({ id }) => {
    console.log(id);
    let categoryTemplate = Handlebars.compile(categoryHtml);
    let categoryTemplateRendered = categoryTemplate({
      category: {
        id: 1,
        totalCost: 555,
      },
    });
    //console.log(categoryHtml)
    document.querySelector('.js-app').innerHTML = categoryTemplateRendered;
  })
  .on('/expenses/add/:category', ({ category }) => {
    //ovde treba da se napravi prolaz za do rute za kategoriju, kad se klikne na neku kategoriju
    let expensesTemplate = Handlebars.compile(expensesHtml);
    let expensesTemplateRendered = expensesTemplate({
      categories: {
        category: 'Car',
      },
    });
    console.log(expensesHtml);
    document.querySelector('.js-app').innerHTML = expensesTemplateRendered;
  })
  .resolve();
