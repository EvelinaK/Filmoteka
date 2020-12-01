import { navigate } from './Router';

const ROOT_ELEMENT = document.querySelector('#view');

const RenderComponent = async (
  renderFunction,
  params,
  rootElement = ROOT_ELEMENT,
) => {
  const template = await renderFunction(params);

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
//&& event.target.getAttribute('href')[0] === '/'
