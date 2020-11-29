import { navigate } from './Router';

const ROOT_ELEMENT = document.querySelector('#view');

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
  });
};

export default RenderComponent;
