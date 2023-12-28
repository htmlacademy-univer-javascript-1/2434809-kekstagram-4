import { imgUploadPreview } from './scale-picture.js';

const slider = document.querySelector('.img-upload__effect-level');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 0
  },
  start: 0,
});

const effectLevelValue = document.querySelector('.effect-level__value');
slider.noUiSlider.on('update', () => {
  effectLevelValue.value = slider.noUiSlider.get();
});

const effectNone = document.querySelector('#effect-none');
effectNone.addEventListener('click', () => {
  slider.classList.add('hidden');
  imgUploadPreview.style.filter = null;
});

const effectChrome = document.querySelector('#effect-chrome');
effectChrome.addEventListener('click', () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  });
  imgUploadPreview.style.filter = null;
  slider.noUiSlider.on('update', () => {
    imgUploadPreview.style.filter = `grayscale(${effectLevelValue.value})`;
  });
});


const effectSepia = document.querySelector('#effect-sepia');

effectSepia.addEventListener('click', () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  });
  imgUploadPreview.style.filter = null;
  slider.noUiSlider.on('update', () => {
    imgUploadPreview.style.filter = `sepia(${effectLevelValue.value})`;
  });
});

const effectMarvin = document.querySelector('#effect-marvin');

effectMarvin.addEventListener('click', () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1
  });
  imgUploadPreview.style.filter = null;
  slider.noUiSlider.on('update', () => {
    imgUploadPreview.style.filter = `invert(${effectLevelValue.value}%)`;
  });
});

const effectPhobos = document.querySelector('#effect-phobos');

effectPhobos.addEventListener('click', () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  });
  imgUploadPreview.style.filter = null;
  slider.noUiSlider.on('update', () => {
    imgUploadPreview.style.filter = `blur(${effectLevelValue.value}px)`;
  });
});

const effectHeat = document.querySelector('#effect-heat');

effectHeat.addEventListener('click', () => {
  slider.classList.remove('hidden');
  slider.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3
    },
    start: 3,
    step: 0.1
  });
  imgUploadPreview.style.filter = null;
  slider.noUiSlider.on('update', () => {
    imgUploadPreview.style.filter = `brightness(${effectLevelValue.value})`;
  });
});

export { slider };
