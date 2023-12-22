import { convertArray } from '../utils/util.js';

const RANDOM_PHOTOS_NUMBER = 10;

const filterContainer = document.querySelector('.img-filters');
const filterButtons = [...document.querySelectorAll('.img-filters__button')];

const defaultFilter = (photos) => photos;

const filterRandom = (photos) => convertArray(photos).slice(0, RANDOM_PHOTOS_NUMBER);

const filterByComments = (photos) => {
  const photosCopy = photos.slice();
  return photosCopy.sort((a, b) => b.comments.length - a.comments.length);
};

const activateFilterButton= () => {
  filterContainer.classList.remove('img-filters--inactive');

  filterContainer.addEventListener('click', (evt) => {
    if (evt.target && evt.target.matches('.img-filters__button')) {
      filterButtons.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });

      evt.target.classList.add('img-filters__button--active');
    }
  });
};

export {defaultFilter, filterRandom, filterByComments, activateFilterButton};
