import "./nouislider.js";

const Effect = {
  chrome: { max: 1, min: 0, step: 0.1, style: (value) => `grayscale(${value})` },
  sepia: { max: 1, min: 0, step: 0.1, style: (value) => `sepia(${value})` },
  marvin: { max: 100, min: 0, step: 1, style: (value) => `invert(${value}%)` },
  phobos: { max: 3, min: 0, step: 0.1, style: (value) => `blur(${value}px)` },
  heat: { max: 3, min: 1, step: 0.1, style: (value) => `brightness(${value})` },
  none: { max: 100, min: 0, step: 1, style: () => "none" },
};
const effectLabel = document.getElementById("effect-none");

const effectLevel = document.querySelector(".effect-level");
const sliderElement = effectLevel.querySelector(".effect-level__slider");
const sliderValue = effectLevel.querySelector(".effect-level__value");

const imgUploadPreview = document.querySelector(".img-upload__preview img");

const imgEffect = {
  effect: "none",
  value: 100
};

const resetEffectImage = () => {
  imgEffect.effect = "none";
  imgEffect.value = 100;
  effectLabel.checked = true;
  updateEffectImage();
};

const updateEffectImage = () => {
  sliderValue.value = imgEffect.value;
  imgUploadPreview.style.filter = Effect[imgEffect.effect].style(imgEffect.value);

  imgUploadPreview.classList.forEach((item) => {
    if (item.includes("effects__preview--")) {
      imgUploadPreview.classList.remove(item);
    }
  });

  imgUploadPreview.classList.add(`effects__preview--${imgEffect.effect}`);

  if (imgEffect.effect === "none") {
    effectLevel.classList.add("visually-hidden");

  } else {
    effectLevel.classList.remove("visually-hidden");
  }
};

const createSlider = () => {
  window.noUiSlider.create(sliderElement, {
    range: {
      max: Effect[imgEffect.effect].max,
      min: Effect[imgEffect.effect].min
    },
    start: Effect[imgEffect.effect].max,
    step: Effect[imgEffect.effect].step,
    connect: "lower",
    format: {
      to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value)
    },
  });

  sliderElement.noUiSlider.on("update", (values, handle) => {
    imgEffect.value = values[handle];

    updateEffectImage();
  });
};

const updateOptionsSlider = (effect) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      max: Effect[effect].max,
      min: Effect[effect].min
    },
    start: Effect[effect].max,
    step: Effect[effect].step
  });
};

const destroySlider = () => {
  sliderElement.noUiSlider.destroy();
};

const onEffectsChange = (evt) => {
  const effect = evt.target.id.split("-")[1];

  imgEffect.effect = effect;

  updateOptionsSlider(effect);
  updateEffectImage();
};

export { resetEffectImage, createSlider, destroySlider, onEffectsChange };
