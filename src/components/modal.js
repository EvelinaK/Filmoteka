import * as basicLightbox from 'basiclightbox';

export const drawModalForTrailler = key => {
  return basicLightbox.create(`
  <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
};
