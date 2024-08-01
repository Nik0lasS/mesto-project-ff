export const closeModal = () => {
  document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
};

const popupsContainerEl = document.getElementById('popupsContainer');

popupsContainerEl.addEventListener('click', (evt) => {
  const targetClassesList = evt.target.classList;

  if(targetClassesList.contains('popup_is-opened')
    || targetClassesList.contains('popup__close')){
    closeModal();
  }
});
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');

    if(openedPopup){
      closeModal();
      return;
    }

  }
});

export const openModal = (modal) => {
  modal.classList.add('popup_is-opened');
};