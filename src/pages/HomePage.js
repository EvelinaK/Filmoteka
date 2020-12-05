import MovieAPI from '../services/MovieAPI';

import Header from '../tamplates/header.hbs';
import SectionCards from '../tamplates/card.hbs';
import SectionPagination from '../tamplates/pagination.hbs';
import Footer from '../tamplates/footer.hbs';
import { startRender } from '../components/pagination';

const init = async (query = 'page=1') => {
  const API = new MovieAPI();
  const queryParams = new URLSearchParams(query);
  const data = await API.getPopularMovies(queryParams.get('page'));
  console.log(data);
  const root = document.createElement('div');

  root.insertAdjacentHTML('beforeend', Header());
  root.insertAdjacentHTML('beforeend', SectionCards(data.results));
  root.insertAdjacentHTML(
    'beforeend',
    SectionPagination({
      paginations: startRender(data.page, data.total_pages),
    }),
  );
  root.insertAdjacentHTML('beforeend', Footer());

  return root.innerHTML;
};

export const addEventHandlers = () => {
  //-обработчик событий вешатьтут только тут а  выше передаваемая функция--////
  // refs.форма поиска .addEventListener('submit', sabmitHendler);
};

// Other functions

export default init;

//{{#each genres}}{{name}}{{#if @last}}{{else}}, {{/if}}{{/each}} |

//-ва хедере инпут нужно завернуть в форму с кнопкой поиска - сабмит
//-иконка поиска должна быть на псевдоэлементе кнопки  , а не вставлена как картинка.
//--отдельная функция
///--функция которая принимает строку и номер страницы  и вызывает апи  getMoviesByQuery(qwery, page) --////.
//
///-----функция должна вернуть данные с сервера

export const sabmitHendler = async event => {
  //--ds
  // event.preventDefault();
  filmApiService.query = e.currentTarget.elements.query.value;
  const searchQuery = event.target.querySelector('input[name="text"]').value;

  if (searchQuery !== '') {
    const data = await API.getMoviesByQuery(searchQuery);
    console.log(data);
  }
};

///берем нопку и

///124 , 4444, 658
// addLs(124) ---
// 1) функция счивыает массив из апи   обьектов  из сторадж по ключу,
// 2) функция записывает массив сторадж по ключу
// обе функции должны предварительно  преобразовать данные из сторадж из формата джейсон и обратно
// 3)фенкция проверяет наличие айдишника  в массиве который лежит в ключе локал сторедж (для считывания
//   данных используем первую ф-цию ) возвращает true или false

// 4)удаляет из считанного во второй функции массива переданный в нее айди
// для проверки можно использовать 3 функцию
