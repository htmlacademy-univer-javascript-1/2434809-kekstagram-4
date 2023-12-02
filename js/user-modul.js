import { isEscapeKey } from './util.js';
import { createFullImage } from './full-photo.js';

const fullImage = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const onDocumentEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    fullImage.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentEscapeKeyDown);
  }
};

const openFullPhoto = () => {
  fullImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeyDown);
};

const closeFullPhoto = () => {
  fullImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscapeKeyDown);
};

const showFullImage = (photo, photoData) => {
  photo.addEventListener('click', () => {
    createFullImage(photoData);
    openFullPhoto();
  });
};

closeButton.addEventListener('click', closeFullPhoto);

fullImage.addEventListener('click', showFullImage);
export {showFullImage};
