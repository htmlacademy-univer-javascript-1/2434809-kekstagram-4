import { isEscapeKey } from './util.js';

let popupStatus = false;

const openPopup = (type) => {
  const popupTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const popup = popupTemplate.cloneNode(true);
  const closePopupButton = popup.querySelector(`.${type}__button`);

  const onDocumentEscapeKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      popup.remove();
      popupStatus = false;
    }

    document.removeEventListener('keydown', onDocumentEscapeKeyDown);
  };

  const onClosePopupButtonClick = () => {
    popup.remove();
    popupStatus = false;
    closePopupButton.removeEventListener('click', onClosePopupButtonClick);
    document.removeEventListener('keydown', onDocumentEscapeKeyDown);
  };

  document.body.append(popup);
  popupStatus = true;
  closePopupButton.addEventListener('click', onClosePopupButtonClick);
  document.addEventListener('keydown', onDocumentEscapeKeyDown);
};

export {openPopup, popupStatus};
