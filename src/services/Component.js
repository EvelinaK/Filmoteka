import { navigate } from './Router';

const ROOT_ELEMENT = document.querySelector('#view');

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
const RenderComponent = async (
  renderFunction,
  query,
  params,
  rootElement = ROOT_ELEMENT,
) => {
  const template = await renderFunction(query, params);
<<<<<<< HEAD
=======

  // Очищаем всю разметук на странице
  rootElement.innerHTML = '';
  // query = '';
  // Вставляем новую разметку на страницу
  rootElement.insertAdjacentHTML('beforeend', template);

  // Следим за кликами на ссылку, и получаем с нее атрибут href,
  // после этого деалем навигацию по этой ссылке через роутер
  document.body.addEventListener('click', event => {
    const link = event.target.closest('a');

    if (link) {
      event.preventDefault();
      navigate(link.getAttribute('href'));
    }
=======
const RenderComponent = async (renderFunction, rootElement = ROOT_ELEMENT) => {
  const template = await renderFunction();
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6

  // Очищаем всю разметук на странице
  rootElement.innerHTML = '';
  // query = '';
  // Вставляем новую разметку на страницу
  rootElement.insertAdjacentHTML('beforeend', template);

  // Следим за кликами на ссылку, и получаем с нее атрибут href,
  // после этого деалем навигацию по этой ссылке через роутер
  document.body.addEventListener('click', event => {
    const link = event.target.closest('a');

    if (link) {
      event.preventDefault();
      navigate(link.getAttribute('href'));
    }
<<<<<<< HEAD
=======
    // /movi
    // local/hppt://jhfijhfk
>>>>>>> 900e5419392afb302609ee05a839b04ad9912570
>>>>>>> fdd83d3ed8cef33da5a2d8cbddec88b68b7ef3f6
  });
};

export default RenderComponent;
//&& event.target.getAttribute('href')[0] === '/'
