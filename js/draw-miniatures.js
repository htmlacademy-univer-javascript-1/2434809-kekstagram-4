const pictures = document.querySelector('.pictures');
const pictureTemp = document.querySelector('#picture').content;

const creatMiniatures = (picturesData) => {
  const fragment = document.createDocumentFragment();

  picturesData.forEach((picture) => {
    const newPicture = pictureTemp.cloneNode(true);
    newPicture.querySelector('.picture__img').src = picture.url;
    newPicture.querySelector('.picture__img').alt = picture.description;
    newPicture.querySelector('.picture__likes').textContent = picture.likes;
    newPicture.querySelector('.picture__comments').textContent = picture.comments.length;
    newPicture.querySelector('.picture__img').id = picture.id;

    fragment.appendChild(newPicture);
  });

  pictures.appendChild(fragment);
};

export { creatMiniatures, pictures };
