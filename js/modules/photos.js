import {showFullImage} from './user-modul.js';
import { debounce } from '../utils/util.js';
import { defaultFilter, filterRandom, filterByComments } from './filter-list.js';

const RERENDER_DELAY = 500;

const photoItemTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photosList = document.querySelector('.pictures');
const filterContainer = document.querySelector('.img-filters');

const createPictureList = (pictures) => {
  for (const picture of pictures) {
    const photoElement = photoItemTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    showFullImage(photoElement, picture);
    photosList.appendChild(photoElement);
  }
};

const clearPhotoList = () => {
  photosList.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

const createPicture = (pictures) => {
  createPictureList(pictures);

  const onFilterContainerClick = (evt) => {
    const target = evt.target;

    switch (target.id) {
      case 'filter-default':
        clearPhotoList();
        createPictureList(
          defaultFilter(pictures),
        );
        break;
      case 'filter-random':
        clearPhotoList();
        createPictureList(
          filterRandom(pictures),
        );
        break;
      case 'filter-discussed':
        clearPhotoList();
        createPictureList(
          filterByComments(pictures),
        );
        break;
    }
  };

  filterContainer.classList.remove('img-filters--inactive');
  filterContainer.addEventListener('click', debounce(onFilterContainerClick, RERENDER_DELAY));
};

export {createPicture};
