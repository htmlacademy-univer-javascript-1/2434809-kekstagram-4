import './modules/photos.js';
import './modules/form.js';
import './modules/scale.js';
import './modules/effects.js';
import './modules/form-submit.js';
import './modules/hashtag.js';
import './modules/file-upload.js';
import { activateFilterButton } from './modules/filter-list.js';
import { createPicture } from './modules/photos.js';
import { sendRequest } from './modules/fetch.js';

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  createPicture(data);
  activateFilterButton();
};

const onFail = () => {
  const errorMessage = document.createElement('div');
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = 0;
  errorMessage.style.top = 0;
  errorMessage.style.right = 0;
  errorMessage.style.fontSize = '30px';
  errorMessage.style.backgroundColor = '#FF4E4E';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.padding = '10px 0';
  errorMessage.textContent = 'Ошибка загрузки фотографий';
  document.body.append(errorMessage);
};

sendRequest(onSuccess, onFail, 'GET');

export {photos};
