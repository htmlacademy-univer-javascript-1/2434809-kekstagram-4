import { isEscapeKey } from '../utils/util.js';
import { resetEffectSettings } from './effects.js';
import { resetScaleModifier } from './scale.js';
import { popupStatus } from '../utils/popup-open.js';

const uploadForm = document.querySelector('#upload-file');
const pictureWindow = document.querySelector('.img-upload__overlay');
const closeButton = pictureWindow.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');

const onDocumentEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt) && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description') && popupStatus === false) {
    evt.preventDefault();

    pictureWindow.classList.add('hidden');
    document.body.classList.remove('modal-open');

    resetScaleModifier();
    resetEffectSettings();
    form.reset();

    document.removeEventListener('keydown', onDocumentEscapeKeyDown);
  }
};

const closePictureWindow = () => {
  pictureWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentEscapeKeyDown);
  closeButton.removeEventListener('click', closePictureWindow);

  resetScaleModifier();
  resetEffectSettings();
};

uploadForm.addEventListener('change', () => {
  pictureWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeyDown);
  closeButton.addEventListener('click', closePictureWindow);
});

export { closePictureWindow };
