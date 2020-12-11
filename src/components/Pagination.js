const template = (page, baseLink = '/', query) => `
  <li class="film-pag no page-item">
    <a class="click-pag" href="${baseLink}?page=${page}${query}">${page}</a>
  </li>
`;

const templateButton = (page, baseLink = '/', query) => `
  <li class="film-pag no page-item">
    <a class="click-pag" href="${baseLink}?page=${page}${query}">${page}</a>
  </li>
`;

const templateDots = (page, baseLink = '/', query) => `
  <li class="film-pag no page-item">
    <a class="click-pag" href="${baseLink}?page=${page}${query}">...</a>
  </li>
`;

const templateactive = (page, baseLink = '/', query) => `
<li class="film-pag no page-item active">
  <a class="click-pag" href="${baseLink}?page=${page}${query}">${page}</a>
</li>
`;

const templatePrev = (page, baseLink = '/', query) => `
<li class="film-page-item previous no">
  <a class="click-pag" href="${baseLink}?page=${page}${query}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.6667 8H3.33334" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.00001 12.6667L3.33334 8.00004L8.00001 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </a>
</li>
`;

const templateNext = (page, baseLink = '/', query) => `
<li class="film-page-item next no">
  <a class="click-pag" href="${baseLink}?page=${page}${query}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.00002 12.6667L12.6667 8.00004L8.00002 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </a>
</li> 
`;
let totalPages;
let baseLinks = '/';

//  totalPages = totalPgs;
// const TOTAL_PAGES = 'totalPages';
export const startRender = (
  currentPage = 1,
  totalPgs,
  baseLink = '/',
  query = '',
) => {
  console.log(baseLink);
  //   localStorage.removeItem(TOTAL_PAGES);
  //   localStorage.setItem(TOTAL_PAGES, totalPgs);

  totalPages = totalPgs;
  baseLinks = baseLink;
  return renderPagination(currentPage, totalPages, baseLink, query);
};

export const renderPagination = (currentPage, totalPages, baseLink, query) => {
  const links = [];
  const isMobile = () => {
    debugger;
    // return setTimeout(window.screen.width <= 320, 300);
    return document.body.clientWidth <= 320;
  };
  //   const totalPages = Number(localStorage.getItem(TOTAL_PAGES));

  let pagData = registerData(currentPage);
  console.log(JSON.stringify(pagData));
  //--функция которая сздает кнопку generatefirspageputton
  links.push(renderPrevBtn(currentPage, baseLink, query));

  if (!isMobile()) {
    links.push(GenerateFirstBtn(pagData, baseLink, query));
  }
  for (let i = 0; i < pagData.length; i++) {
    if (pagData[i] == currentPage) {
      links.push(templateactive(pagData[i], baseLink, query));
    } else if (pagData[i] <= totalPages) {
      links.push(template(pagData[i], baseLink, query));
    }
  }
  if (!isMobile()) {
    links.push(GenerateLastBtn(pagData, totalPages, baseLink, query));
  }
  //--функция которая сздает кнопку generatefirspageputton
  links.push(renderNextBtn(currentPage, totalPages, baseLink, query));

  return links.join('');
};

function renderPrevBtn(currentPage, baseLink, query) {
  let prevBtnHTML = '';
  if (currentPage > 1) {
    prevBtnHTML = templatePrev(currentPage - 1, baseLink, query);
  }

  return prevBtnHTML;
}

function renderNextBtn(currentPage, totalPages, baseLink, query) {
  let nextBtnHTML = '';
  var totalPages;

  if (currentPage < totalPages) {
    nextBtnHTML = templateNext(currentPage + 1, baseLink, query);
  }

  return nextBtnHTML;
}

function GenerateFirstBtn(pagData, baseLink, query) {
  let str;

  if (pagData.includes(1)) {
    str = null;
  } else if (pagData.includes(2)) {
    str = templateButton(1, baseLink, query);
  } else {
    str =
      templateButton(1, baseLink, query) +
      templateDots(pagData[0] - 1, baseLink, query);
  }

  return str;
}
function GenerateLastBtn(pagData, totalPages, baseLink, query) {
  var totalPages;
  let str;
  if (pagData.includes(totalPages)) {
    str = null;
  } else if (pagData.includes(totalPages - 1)) {
    str = templateButton(totalPages, baseLink, query);
  } else {
    str =
      templateDots(pagData[pagData.length - 1] + 1, baseLink, query) +
      templateButton(totalPages, baseLink, query);
  }
  return str;
}

function createRegisterArray(startIndex, maxLength, totalPages) {
  let registerArray = [];
  let lastIndex = startIndex + maxLength;

  var totalPages;

  let firstRegNr = startIndex + 1;
  let lastRegNr = firstRegNr + maxLength;

  if (lastRegNr > totalPages) {
    lastRegNr = totalPages + 1;
  }

  let diff = lastRegNr - firstRegNr;

  if (diff < maxLength) {
    firstRegNr = lastRegNr - maxLength;
    if (firstRegNr < 1) {
      firstRegNr = 1;
    }
  }

  for (let i = firstRegNr; i < lastRegNr; i++) {
    registerArray.push(i); //store register number (starts with 1);
  }

  return registerArray;
}

function registerData(activePageID) {
  let pagData = [];
  if (activePageID < 4) {
    pagData = createRegisterArray(0, 5);
  } else {
    let startIndex = activePageID - 3;
    pagData = createRegisterArray(startIndex, 5);
  }

  return pagData;
}

// если в массиве нет 1 , то рисую кнопку и добавлчяю
// в основной массив если не единицы , а есть двойка , то троеточие не рисую
// если нет ни единицы ни двойки троеточие рисую
