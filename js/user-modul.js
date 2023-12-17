import { isEscapeKey } from './util.js';
import { createFullImage } from './full-photo.js';
import { createComment } from './comments.js';

const COMMENTS_COUNT = 5;

const fullImage = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const commentsButton = fullImage.querySelector('.comments-loader');
const currentCommentsCount = fullImage.querySelector('.current-comments-count');
const comments = document.querySelector('.social__comments');

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
    let currentCount = COMMENTS_COUNT;

    const onCommentsButtonClick = () => {
      currentCount += COMMENTS_COUNT;

      if (currentCount > photoData.comments.length) {
        currentCount = photoData.comments.length;
      }

      comments.innerHTML = '';

      const currentComments = photoData.comments.slice(0, currentCount);

      currentComments.forEach((comment) => {
        comments.appendChild(createComment(comment));
      });

      currentCommentsCount.textContent = currentCount;

      if (currentComments.length === photoData.comments.length) {
        commentsButton.classList.add('hidden');
        commentsButton.removeEventListener('click', onCommentsButtonClick);
      }
    };

    if (photoData.comments.length <= 5) {
      photoData.comments.forEach((comment) => {
        comments.appendChild(createComment(comment));
      });
      currentCommentsCount.textContent = photoData.comments.length;
      commentsButton.classList.add('hidden');
    } else {
      for (let i = 0; i < COMMENTS_COUNT; i++) {
        comments.appendChild(createComment(photoData.comments[i]));
      }
      currentCommentsCount.textContent = COMMENTS_COUNT;
      commentsButton.addEventListener('click', onCommentsButtonClick);
    }
    openFullPhoto();
  });
};

closeButton.addEventListener('click', closeFullPhoto);


export {showFullImage};
