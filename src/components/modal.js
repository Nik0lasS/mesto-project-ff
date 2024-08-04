export const closeModal = () => {
  document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscClose);
};

export function setPopupListeners(){
  const popupsContainerEl = document.getElementById('popupsContainer');
 
  popupsContainerEl.addEventListener('click', (evt) => {
    const targetClassesList = evt.target.classList;
 
    if(targetClassesList.contains('popup_is-opened')
      || targetClassesList.contains('popup__close')){
      closeModal();
    }
  });
 } 

const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
};

export const openModal = (modal) => {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscClose);
};