import { maxScaleValue, minScaleValue, scaleStep } from './constants.js';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');

scaleControlValue.setAttribute('value', `${maxScaleValue}%`);
let currentScale;

const imgUploadPreview = document.querySelector('.img-upload__preview');

scaleControlSmaller.addEventListener('click', () => {
  if (currentScale > minScaleValue) {
    currentScale -= scaleStep;
    scaleControlValue.value = currentScale + '%';
    imgUploadPreview.style.transform = `scale(${currentScale / 100})`;
  }
});

const scaleControlBigger = document.querySelector('.scale__control--bigger');
scaleControlBigger.addEventListener('click', () => {
  if (currentScale < maxScaleValue) {
    currentScale += scaleStep;
    scaleControlValue.value = currentScale + '%';
    imgUploadPreview.style.transform = `scale(${currentScale / 100})`;
  }
});

const setCurrentScale = (value) => {
  currentScale = value;
};

export { setCurrentScale, imgUploadPreview };
