const fullImage = document.querySelector('.big-picture__preview');
const comments = document.querySelector('.social__comments');

const createFullImage = (photoData) => {
  fullImage.querySelector('.big-picture__img').querySelector('img').src = photoData.url;
  fullImage.querySelector('.likes-count').textContent = photoData.likes;
  fullImage.querySelector('.comments-count').textContent = photoData.comments.length;
  fullImage.querySelector('.social__caption').textContent = photoData.description;
  fullImage.querySelector('.comments-loader').classList.remove('hidden');
  comments.innerHTML = '';
  return fullImage;
};

export {createFullImage};


