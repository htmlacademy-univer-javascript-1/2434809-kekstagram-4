const DEFAULT_START_VALUE = 100;

const sliderContainer = document.querySelector('.effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const picturePreview = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects__list');
const effectValue = sliderContainer.querySelector('.effect-level__value');

let currentEffect = '';
let effectUnitMeasure = '';

const sliderOptions = {
  'NONE': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    CURRENT_EFFECT: '',
    EFFECT_UNIT_MEASURE: '',
  },
  'CHROME': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    CURRENT_EFFECT: 'grayscale',
    EFFECT_UNIT_MEASURE: '',
  },
  'SEPIA': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    CURRENT_EFFECT: 'sepia',
    EFFECT_UNIT_MEASURE: '',
  },
  'MARVIN': {
    RANGE: {
      MIN: 0,
      MAX: 100,
    },
    START: 0,
    STEP: 1,
    CURRENT_EFFECT: 'invert',
    EFFECT_UNIT_MEASURE: '%',
  },
  'PHOBOS': {
    RANGE: {
      MIN: 0,
      MAX: 3,
    },
    START: 0,
    STEP: 0.1,
    CURRENT_EFFECT: 'blur',
    EFFECT_UNIT_MEASURE: 'px',
  },
  'HEAT': {
    RANGE: {
      MIN: 1,
      MAX: 3,
    },
    START: 0,
    STEP: 0.1,
    CURRENT_EFFECT: 'brightness',
    EFFECT_UNIT_MEASURE: '',
  },
};

const setFilter = (className) => {
  picturePreview.classList = '';
  picturePreview.classList.add(className);
};

const updateSlider = ({ RANGE: { MIN, MAX }, START, STEP, CURRENT_EFFECT, EFFECT_UNIT_MEASURE }, startValue, display) => {
  currentEffect = CURRENT_EFFECT;
  effectUnitMeasure = EFFECT_UNIT_MEASURE;

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: MIN,
      max: MAX,
    },
    start: START,
    step: STEP,
  });

  sliderElement.noUiSlider.set(startValue);
  sliderContainer.style.display = display;
};

const resetEffectSettings = () => {
  picturePreview.classList = '';
  picturePreview.style.filter = '';
  updateSlider(sliderOptions.NONE, DEFAULT_START_VALUE, 'NONE');
};

noUiSlider.create(sliderElement, {
  connect: 'lower',
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  picturePreview.style.filter = `${currentEffect}(${unencoded[handle]}${effectUnitMeasure})`;
  effectValue.setAttribute('value', unencoded[handle]);
});

resetEffectSettings();

effects.addEventListener('change', (evt) => {
  const target = evt.target;
  const targetEffect = target.value.toUpperCase();

  if (target && target.value === 'none') {
    resetEffectSettings();
    updateSlider(sliderOptions[targetEffect], DEFAULT_START_VALUE, 'none');
  }

  if (target && target.value === 'chrome') {
    setFilter('effects__preview--chrome');
    updateSlider(sliderOptions[targetEffect], DEFAULT_START_VALUE, 'block');
  }

  if (target && target.value === 'sepia') {
    setFilter('effects__preview--sepia');
    updateSlider(sliderOptions[targetEffect], DEFAULT_START_VALUE, 'block');
  }

  if (target && target.value === 'marvin') {
    setFilter('effects__preview--marvin');
    updateSlider(sliderOptions[targetEffect], DEFAULT_START_VALUE, 'block');
  }

  if (target && target.value === 'phobos') {
    setFilter('effects__preview--phobos');
    updateSlider(sliderOptions[targetEffect], DEFAULT_START_VALUE, 'block');
  }

  if (target && target.value === 'heat') {
    setFilter('effects__preview--heat');
    updateSlider(sliderOptions[targetEffect], DEFAULT_START_VALUE, 'block');
  }
});


export {resetEffectSettings};

