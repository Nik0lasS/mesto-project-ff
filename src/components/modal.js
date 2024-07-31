const closeModal = (modal) => {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscClose);
};

const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closeModal(openedPopup);
  }
};

export const openModal = (modal) => {
  modal.classList.add('popup_is-opened');
  startModalCloseEventsListen(modal);
  document.addEventListener('keydown', handleEscClose);
};

export const startModalCloseEventsListen = (modal) => {
  const popupClose = modal.querySelector('.popup__close');
  popupClose.addEventListener('click', () => {
    closeModal(modal);
  });

  modal.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closeModal(modal);
    };
  });
}