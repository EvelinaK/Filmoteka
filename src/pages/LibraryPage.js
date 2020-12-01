import { navigate } from '../services/Router';
import API from '../services/MovieAPI';
import Template from '../tamplates/card.hbs';
const template = `
  <div>
    <span>Library page title</span>
    <a href="/">Home</a>
  </div>
`;

const init = async () => {
  const parser = new DOMParser();
  const DOM = parser.parseFromString(template, 'text/html');
  const movieList = await API.getTrendingMovies();
  console.log(movieList);

  return template;
};

export default init;

// Other functions
