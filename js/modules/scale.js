const SCALE_MAX_VALUE = 100;
const SCALE_MIN_VALUE = 25;
const DEFAULT_SCALE_STEP = 25;

const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const scaleCounter = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');

const setScaleOnPicture = () => {
  const currentValue = parseFloat(scaleCounter.value);
  picturePreview.style.transform = `scale(${currentValue / 100})`;
};

const onButtonBiggerClick = () => {
  const currentValue = parseFloat(scaleCounter.value);
  if (currentValue < SCALE_MAX_VALUE) {
    scaleCounter.value = `${currentValue + DEFAULT_SCALE_STEP}%`;
    setScaleOnPicture();
  }
};

const onButtonSmallerClick = () => {
  const currentValue = parseFloat(scaleCounter.value);
  if (currentValue > SCALE_MIN_VALUE) {
    scaleCounter.value = `${currentValue - DEFAULT_SCALE_STEP}%`;
    setScaleOnPicture();
  }
};

const resetScaleModifier = () => {
  picturePreview.style.transform = '';
};

export {resetScaleModifier};
buttonBigger.addEventListener('click', onButtonBiggerClick);
buttonSmaller.addEventListener('click', onButtonSmallerClick);


