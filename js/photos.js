import { photos } from './data.js';

const photoItemTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictures = photos();
const fragment = document.createDocumentFragment();
const photosList = document.querySelector('.pictures');

pictures.forEach((picture) => {
  const photoElement = photoItemTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = picture.url;
  photoElement.querySelector('.picture__likes').textContent = picture.likes;
  photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
  fragment.appendChild(photoElement);
});

photosList.appendChild(fragment);
export { photosList };
