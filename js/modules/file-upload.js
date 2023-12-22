const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const photoUploadForm = document.querySelector('.img-upload__form');
const fileChooser = photoUploadForm.querySelector('.img-upload__start input[type=file]');
const photoPreview = photoUploadForm.querySelector('.img-upload__preview img');
const photoEffectsPreview = photoUploadForm.querySelectorAll('.effects__preview');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photoPreview.src = URL.createObjectURL(file);

    photoEffectsPreview.forEach((preview) => {
      preview.style.backgroundImage = `url('${URL.createObjectURL(file)}')`;
    });
  }
});

