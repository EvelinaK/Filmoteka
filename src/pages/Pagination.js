import MovieAPI from '../services/MovieAPI';
import Template from '../tamplates/card.hbs';
const template = `

<div id="homePage">
    <div id="wrapper">
    <span>Home page title</span>
    <a href="/library">Library</a>
    <button>Load more</button>
<section class="films__list">
  <div id="film-pagination">
  </div>
</section>
    </div>
 </div>
`;

// const movieCard = data => `
//   <div>
//     <span class="title">${data.original_title}</span>
//   </div>
// `;

let pagination = document.querySelector('#film-pagination');

const init = async () => {
  const API = new MovieAPI();
  const parser = new DOMParser();
  const DOM = parser.parseFromString(template, 'text/html');

  const movieList = await API.getPopularMovies();
  console.log(movieList);
  let notesOnPage = 8;
  let countOfItems = Math.ceil(movieList.results.length / notesOnPage);
  console.log(countOfItems);

  movieList.results.forEach(movie => {
    // DOM.querySelector('div').insertAdjacentHTML('beforeend', movieCard(movie));
    // DOM.querySelector('.cards__films-wrap').insertAdjacentHTML(
    //   'beforeend',
    //   Template(movie),
    // );
  });

  // Обязательно возврашщать разметку
  return DOM.querySelector('#homePage').innerHTML;
};

export const addEventHandlers = () => {
  document.querySelector('button').addEventListener('click', event => {
    console.log(event);
  });
};

export default init;

// let users = [
//     { name: "name1", surname: "surname1", age: 30 },
//     { name: "name2", surname: "surname2", age: 30 },
//     { name: "name3", surname: "surname3", age: 30 },
//     { name: "name4", surname: "surname4", age: 30 },
//     { name: "name5", surname: "surname5", age: 30 },
//     { name: "name6", surname: "surname6", age: 30 },
//     { name: "name7", surname: "surname7", age: 30 },
//     { name: "name8", surname: "surname8", age: 30 },
//     { name: "name9", surname: "surname9", age: 30 },
//     { name: "name10", surname: "surname10", age: 30 },
//     { name: "name11", surname: "surname11", age: 30 },
//     { name: "name12", surname: "surname12", age: 30 },
//     { name: "name13", surname: "surname13", age: 30 },
//   ];

//   let table = document.querySelector("#table");
//   let pagination = document.querySelector("#pagination");

//   let notesOnPage = 3;
//   let countOfItems = Math.ceil(users.length / notesOnPage);

//   let showPage = (function () {
//     let active;

//     return function (item) {
//       if (active) {
//         active.classList.remove("active");
//       }
//       active = item;

//       item.classList.add("active");

//       let pageNum = +item.innerHTML;

//       let start = (pageNum - 1) * notesOnPage;
//       let end = start + notesOnPage;

//       let notes = users.slice(start, end);

//       table.innerHTML = "";
//       for (let note of notes) {
//         let tr = document.createElement("tr");
//         table.appendChild(tr);

//         createCell(note.name, tr);
//         createCell(note.surname, tr);
//         createCell(note.age, tr);
//       }
//     };
//   })();

//   let items = [];
//   for (let i = 1; i <= countOfItems; i++) {
//     let li = document.createElement("li");
//     li.innerHTML = i;
//     pagination.appendChild(li);
//     items.push(li);
//   }

//   showPage(items[0]);

//   for (let item of items) {
//     item.addEventListener("click", function () {
//       showPage(this);
//     });
//   }

//   function createCell(text, tr) {
//     let td = document.createElement("td");
//     td.innerHTML = text;
//     tr.appendChild(td);
//   }

/* <div id="film-pagination">
<ul class="film-page-list">
  <li class="film-page-item previous no">
    <a class="click-pag" onclick="createPagination(pages, 12)">
      <img class="film-control" src="images/arrow-right.png" alt=""></a></li>
  <li class="film-pag no page-item"><a class="click-pag" onclick="createPagination(pages, 1)">1</a></li>
  <li class="film-pag out-of-range"><a class="click-pag-r" onclick="createPagination(pages,11)">...</a></li>
  <li class="film-pag page-item no"><a class="click-pag" onclick="createPagination(pages, 12)">12</a></li>
  <li class="film-pag page-item no"><a class="click-pag" onclick="createPagination(pages, 12)">13</a></li>
  <li class="film-pag page-item active"><a class="click-pag" onclick="createPagination(pages, 14)">14</a></li>
  <li class="film-pag page-item no"><a class="click-pag" onclick="createPagination(pages, 14)">15</a></li>
  <li class="film-pag page-item no"><a class="click-pag" onclick="createPagination(pages, 14)">16</a></li>
  <li class="film-pag out-of-range"><a class="click-pag-r" onclick="createPagination(pages,15)">...</a></li>
  <li class="film-pag page-item no"><a class="click-pag" onclick="createPagination(pages, pages)">25</a></li>
  <li class="film-pag page-item next no"><a class="click-pag" onclick="createPagination(pages, 14)">
      <img class="film-control" src="./images/arrow-left.png" alt=""></a></li>
</ul>
</div> */
