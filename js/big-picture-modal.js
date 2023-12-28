import { pictures } from './draw-miniatures.js';
import { isEscapeKey } from './util.js';

const onCommentsLoaderClick = () => {
  loadComments();
};

const bigPhoto = document.querySelector('.big-picture');
const comment = bigPhoto.querySelector('.social__comments');
const countComm = document.querySelector('.social__comment-count');
const loadComm = document.querySelector('.comments-loader');
const showCommCount = 5;
let comments;
let showedComments = 0;

const loadComments = () => {
  const loadStart = showedComments;
  showedComments = Math.min(showedComments + showCommCount, comments.length);
  const commentForm = comments.length === 1 ? 'комментария' : 'комментариев';
  countComm.innerHTML = `${showedComments} из <span class="comments-count">${comments.length}</span> ${commentForm}`;
  if (comments.length <= showedComments) {
    loadComm.classList.add('hidden');
  } else {
    loadComm.classList.remove('hidden');
  }
  for (let i = loadStart; i < showedComments; i++) {
    comment.appendChild(comments[i]);
  }
};

const createComments = (commentsData) => {
  comment.innerHTML = '';
  const commentsArray = [];
  commentsData.forEach((comment) => {
    const newComment = document.createElement('li');
    newComment.classList.add('social__comment');
    newComment.innerHTML =
      `<img class="social__picture" src=${comment.avatar} alt=${comment.name} width="35" height="35">
      <p>${comment.message}</p>`;

    commentsArray.push(newComment);
  });

  return commentsArray;
};

const createBigPictureData = (evt, picturesData) => {
  const miniature = picturesData.find((picture) => picture.id === Number(evt.target.id));
  bigPhoto.querySelector('.big-picture__img img').src = miniature.url;
  bigPhoto.querySelector('.likes-count').textContent = miniature.likes;
  bigPhoto.querySelector('.comments-count').textContent = miniature.comments.length;
  comments = createComments(miniature.comments);
  loadComments();
  bigPhoto.querySelector('.social__caption').textContent = miniature.description;
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};


const body = document.querySelector('body');
const closeButton = document.querySelector('.big-picture__cancel');

function openBigPicture(evt, picturesData) {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');

  createBigPictureData(evt, picturesData);

  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', (event) => {
    onDocumentKeydown(event);
  });
  loadComm.addEventListener('click', onCommentsLoaderClick);
}

function closeBigPicture() {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', (event) => {
    onDocumentKeydown(event);
  });
  showedComments = 0;
  loadComm.removeEventListener('click', onCommentsLoaderClick);
}

const renderBigPicture = (picturesData) => {
  pictures.addEventListener('click', (evt) => {
    if (!evt.target.closest('.img-upload')) {
      openBigPicture(evt, picturesData);
    }
  });
};

export { renderBigPicture };
