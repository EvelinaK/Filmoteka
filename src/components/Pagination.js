const template = page => `
  <li class="film-pag no page-item">
    <a class="click-pag" href="/?page=${page}">${page}</a>
  </li>
`;

const templateactive = page => `
<li class="film-pag no page-item active">
  <a class="click-pag" href="/?page=${page}">${page}</a>
</li>
`;

const templateprev = () => `
<li class="film-page-item previous no">
  <a class="click-pag" onclick="return prevClick();"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.6667 8H3.33334" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.00001 12.6667L3.33334 8.00004L8.00001 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </a>
</li>
`;

const templatenext = () => `
<li class="film-pag page-item next no">
  <a class="click-pag" onclick="return nextClick();"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.00002 12.6667L12.6667 8.00004L8.00002 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </a>
</li> 
`;

const TOTAL_PAGES = 'totalPages';

export const startRender = (currentPage = 1, totalPgs) => {
  localStorage.removeItem(TOTAL_PAGES);
  localStorage.setItem(TOTAL_PAGES, totalPgs);

  return renderPagination(currentPage);
};

export const renderPagination = currentPage => {
  const links = [];
  const totalPages = Number(localStorage.getItem(TOTAL_PAGES));

  let pagData = registerData(currentPage);
  // console.log(JSON.stringify(pagData));

  links.push(renderPrevBtn(currentPage));

  for (let i = 0; i < pagData.length; i++) {
    if (pagData[i] == currentPage) {
      links.push(templateactive(pagData[i]));
    } else if (pagData[i] <= totalPages) {
      links.push(template(pagData[i]));
    }
  }

  links.push(renderNextBtn(currentPage, totalPages));

  // console.log(links.join(''));
  return links.join('');
};

function prevClick(activePageID) {
  activePageID = activePageID - 1;
  if (activePageID < 1) {
    activePageID = 1;
  }

  // console.log('activePageID: ' + activePageID);
  renderPagination(activePageID);
}

function nextClick() {
  const totalPages = Number(localStorage.getItem(TOTAL_PAGES));
  activePageID = activePageID + 1;

  if (activePageID > totalPages) {
    activePageID = totalPages;
  }

  // console.log('activePageID: ' + activePageID);
  renderPagination(activePageID);
}

function renderPrevBtn(id) {
  let prevBtnHTML = '';
  if (id > 1) {
    prevBtnHTML = templateprev();
  }

  return prevBtnHTML;
}

function renderNextBtn(id) {
  let nextBtnHTML = '';
  const totalPages = Number(localStorage.getItem(TOTAL_PAGES));

  if (id < totalPages) {
    nextBtnHTML = templatenext(totalPages);
  }

  return nextBtnHTML;
}

function createRegisterArray(startIndex, maxLength) {
  let registerArray = [];
  let lastIndex = startIndex + maxLength;

  const totalPages = Number(localStorage.getItem(TOTAL_PAGES));

  // console.log('startIndex: ' + startIndex + ', lastIndex: ' + lastIndex);

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

  // console.log(
  //   'firstRegNr: ' +
  //     firstRegNr +
  //     ', lastRegNr: ' +
  //     lastRegNr +
  //     ', diff: ' +
  //     diff,
  // );
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
    let startIndex = activePageID - 4;
    pagData = createRegisterArray(startIndex, 7);
  }

  return pagData;
}

function addDotsBlock() {
  const dots = document.createElement('div');
  dots.classList.add('dots');
  dots.innerText = '...';
  return dots;
}

// адаптировать под себя

// if (
//   totalPages >= 6 &&
//   i == 1 &&
//   currentPage !== 1 &&
//   currentPage !== 2 &&
//   currentPage !== 3
// ) {
//   const threeDotsEl = addThreeDotsBlock();
//   wrapper.insertBefore(threeDotsEl, wrapper[wrapper.length - 2]);
// }

// if (
//   pageCount >= 7 &&
//   i == pageCount - 1 &&
//   currentPage !== pageCount &&
//   currentPage !== pageCount - 2 &&
//   currentPage !== pageCount - 1
// ) {
//   const threeDotsEl = addThreeDotsBlock();
//   wrapper.insertBefore(threeDotsEl, wrapper[1]);
// }
