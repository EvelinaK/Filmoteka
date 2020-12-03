const template = (page, baseLink = '/') => `
  <li class="film-pag no page-item">
    <a class="click-pag" href="${baseLink}?page=${page}">${page}</a>
  </li>
`;

const template2 = (page, baseLink = '/') => `
<li class="film-pag no page-item active">

</li>
`;

export const initPagination = (
  currentPage = 1,
  allPages = 1,
  baseLink = '/',
) => {
  const links = [];
  let pagData = []; //reduced for pagination register
  currentPage; //current page
  let pagMaxLength = 8;

  ////////////////////-------------ментор написал вставку всех номеров пагинации---------------------------////////////
  // if (currentPage < 1) {
  //   page = 1;
  // } else {
  // for (let i = currentPage - 4; i <= currentPage + 4; i++) {
  //   console.log(allPages);
  //   console.log(currentPage);

  //   // currentPage.classlist.add('active');
  //   links.push(template(i, baseLink));
  // }

  for (let i = currentPage - 4; i <= currentPage + 4; i++) {
    // console.log(allPages);
    console.log(currentPage);
    console.log(currentPage - 4);
    if (i < 1) {
      currentPage++;
      console.log('activePage ' + currentPage);
    }
    // if (currentPage == page) {
    //   currentPage.classlist.add('active');
    // }
    else {
      links.push(template(i, baseLink));
    }

    // links.push(template(i, baseLink));
  }

  return links.join('');
  //----------------------------------------////////////////
  // }
};
