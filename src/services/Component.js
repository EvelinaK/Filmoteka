import { navigate } from './Router';

const ROOT_ELEMENT = document.querySelector('#view');

<<<<<<< HEAD
const RenderComponent = async (
  renderFunction,
  query,
  params,
  rootElement = ROOT_ELEMENT,
) => {
  const template = await renderFunction(query, params);

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

  // Очищаем всю разметук на странице
  rootElement.innerHTML = '';
  // Вставляем новую разметку на страницу
  rootElement.insertAdjacentHTML('beforeend', template);

  // Следим за кликами на ссылку, и получаем с нее атрибут href, после этого деалем навигацию по этой ссылке через роутер
  rootElement.addEventListener('click', event => {
    if (event.target.nodeName === 'A') {
      event.preventDefault();
      navigate(event.target.getAttribute('href'));
    }
    // /movi
    // local/hppt://jhfijhfk
>>>>>>> 900e5419392afb302609ee05a839b04ad9912570
  });
};

export default RenderComponent;
//&& event.target.getAttribute('href')[0] === '/'
