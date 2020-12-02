// import MovieAPI from '../services/MovieAPI';

// 1)модуль класс
// (
// page (default 1)
// storage_type {"API"|| "LocalStorage Queue"||"LS Watched"}
// searchQuery
// )

// if storage_type == "API" {
// return fetch(
//     `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`,
//   ).then(res => res.json());
// }
debugger;
export default class Pagination {
  constructor() {
    this.pugPage = 1;
    this.storage_type = {};
    this.searchQuery = '';
    this.pugPage = 1;
  }

  // renderPage(){

  // }

  initPag() {
    // const init = async () => {
    const API = new MovieAPI();
    API.getPopularMovies().then(data => {
      const { total_results, page, total_pages, results } = data;
      console.log(data);
      // const duffElem = document.createElement('div');
      // duffElem.insertAdjacentHTML('beforeend', Header());
      // duffElem.insertAdjacentHTML('beforeend', SectionCards(results));
      // duffElem.insertAdjacentHTML('beforeend', SectionPagination());
      // duffElem.insertAdjacentHTML('beforeend', Footer());

      // return duffElem.innerHTML;
    });
    // };
  }
}

// buildTable()

// function pagination(querySet, page, rows) {

//     var trimStart = (page - 1) * rows
//     var trimEnd = trimStart + rows

//     var trimmedData = querySet.slice(trimStart, trimEnd)

//     var pages = Math.round(querySet.length / rows);

//     return {
//         'querySet': trimmedData,
//         'pages': pages,
//     }
// }

// function pageButtons(pages) {
//     var wrapper = document.getElementById('pagination-wrapper')

//     wrapper.innerHTML = ``
// 	console.log('Pages:', pages)

//     var maxLeft = (state.page - Math.floor(state.window / 2))
//     var maxRight = (state.page + Math.floor(state.window / 2))

//     if (maxLeft < 1) {
//         maxLeft = 1
//         maxRight = state.window
//     }

//     if (maxRight > pages) {
//         maxLeft = pages - (state.window - 1)

//         if (maxLeft < 1){
//         	maxLeft = 1
//         }
//         maxRight = pages
//     }

//     for (var page = maxLeft; page <= maxRight; page++) {
//     	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
//     }

//     if (state.page != 1) {
//         wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
//     }

//     if (state.page != pages) {
//         wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
//     }

//     $('.page').on('click', function() {
//         $('#table-body').empty()

//         state.page = Number($(this).val())

//         buildTable()
//     })

// }

// function buildTable() {
//     var table = $('#table-body')

//     var data = pagination(state.querySet, state.page, state.rows)
//     var myList = data.querySet

//     for (var i = 1 in myList) {
//         //Keep in mind we are using "Template Litterals to create rows"
//         var row = `<tr>
//                   <td>${myList[i].rank}</td>
//                   <td>${myList[i].first_name}</td>
//                   <td>${myList[i].last_name}</td>
//                   `
//         table.append(row)
//     }

//     pageButtons(data.pages)
// }
