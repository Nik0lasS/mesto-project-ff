export const closeModal = (modal) => {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscClose);
};

const popupsContainerEl = document.getElementById('popupsContainer');

popupsContainerEl.addEventListener('click', (evt) => {
  const targetClassesList = evt.target.classList;

  if(targetClassesList.contains('popup_is-opened')
    || targetClassesList.contains('popup__close')){
    const openedPopup = popupsContainerEl.querySelector('.popup_is-opened');
    closeModal(openedPopup);
  }
});

const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closeModal(openedPopup);
  }
};

export const openModal = (modal) => {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscClose);
};