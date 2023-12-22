import { sendRequest } from './fetch.js';
import { openPopup } from '../utils/popup-open.js';
import { closePictureWindow } from './form.js';

const formUpload = document.querySelector('.img-upload__form');

const closeForm = () => {
  formUpload.reset();
  closePictureWindow();
};

const onSuccess = () => {
  closeForm();
  openPopup('success');
};

const onFail = () => {
  openPopup('error');
};

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendRequest(onSuccess, onFail, 'POST', new FormData(formUpload));
});

