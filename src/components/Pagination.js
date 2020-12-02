const template = (page, baseLink = '/') => `
  <li class="film-pag no page-item">
    <a class="click-pag" href="${baseLink}?page=${page}">${page}</a>
  </li>
`;

export const initPagination = (
  currentPage = 1,
  allPages = 1,
  baseLink = '/',
) => {
  const links = [];

  for (let i = 1; i <= allPages; i++) {
    links.push(template(i, baseLink));
  }

  return links.join('');
};
