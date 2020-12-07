import * as basicLightbox from 'basiclightbox';

////////-----------------модкальное окно на клик--------------------------------------------/////////
export function openModalImg({ target }) {
  if (target.nodeName !== 'IMG') {
    return;
  }
  const largeImgURL = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImgURL}" width="800" height="600">
  `);
  instance.show();

  //createModal(largeImgURL);--------функция для отрисовки картинок отдельная (вызов )-------/////////
}
////////-----------------библиотека для модального окна--------------------------------------/////////
// function createModal(img) {
//   const instance = basicLightbox.create(`
//   <img src="${img}" width="800" height="600">
// `);
//   instance.show();
// }
