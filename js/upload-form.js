import { isEscapeKey } from './util.js';
import { validHashtag, hashtagMaxCount, hashtagErrorMessages, maxScaleValue } from './constants.js';
import { setCurrentScale, imgUploadPreview } from './scale-picture.js';
import { slider } from './filters.js';
import { uploadData } from './fetch.js';

const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const getSplitedHashtags = (tags) => tags.toLowerCase().trim().split(/\s+/g);

const isHashtagsValid = (tags) => getSplitedHashtags(tags).every((tag) => validHashtag.test(tag));

const isHashtagsUnique = (tags) => getSplitedHashtags(tags).length === new Set(getSplitedHashtags(tags)).size;

const isHashtagsLimited = (tags) => getSplitedHashtags(tags).length <= hashtagMaxCount;

const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');
pristine.addValidator(hashtagField, isHashtagsValid, hashtagErrorMessages[0]);
pristine.addValidator(hashtagField, isHashtagsUnique, hashtagErrorMessages[1]);
pristine.addValidator(hashtagField, isHashtagsLimited, hashtagErrorMessages[2]);
pristine.addValidator(descriptionField, (value) => value.length <= 140, 'Максимальная длина 140 символов');

hashtagField.addEventListener('change', () => {
  pristine.validate();
});

descriptionField.addEventListener('change', () => {
  pristine.validate();
});

const imgUploadSubmit = document.querySelector('.img-upload__submit');
uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    const formData = new FormData(evt.target);
    imgUploadSubmit.disabled = true;
    uploadData(formData);
  }
});

const uploadModal = document.querySelector('.img-upload__overlay');

const onDocumentKeydown = (evt) => {
  if (!(document.activeElement === hashtagField || document.activeElement === descriptionField) && isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadModal();
  }
};

const body = document.body;
const closeFormButton = document.querySelector('.img-upload__cancel');

function openUploadModal() {
  uploadModal.classList.remove('hidden');
  body.classList.remove('modal-open');

  setCurrentScale(maxScaleValue);
  imgUploadPreview.style.transform = `scale(${maxScaleValue / 100})`;
  imgUploadPreview.style.filter = null;
  slider.classList.add('hidden');

  closeFormButton.addEventListener('click', closeUploadModal);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUploadModal() {
  uploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  pristine.reset();
  document.removeEventListener('keydown', onDocumentKeydown);
}
const uploadInput = document.querySelector('.img-upload__input');

uploadInput.addEventListener('change', openUploadModal);

export { closeUploadModal, uploadModal, imgUploadSubmit };
