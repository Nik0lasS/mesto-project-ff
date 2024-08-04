// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import '../styles/index.css';
import { initialCards, createCard, deleteCard, likeCard } from './cards.js';
import { openModal, closeModal, setPopupListeners } from './modal.js';

const placeList = document.querySelector('.places__list');
const popupImg = document.querySelector('.popup_type_image');
const imgInPopup = popupImg.querySelector('.popup__image');
const imgInPopupDescription = popupImg.querySelector('.popup__caption');
const profileEdit = document.querySelector('.profile__edit-button');
const profileAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const editProfileForm = document.forms.editProfile;
const nameInput = editProfileForm.querySelector('.popup__input_type_name');
const jobInput = editProfileForm.querySelector('.popup__input_type_description');
const nameValue = document.querySelector('.profile__title');
const jobValue = document.querySelector('.profile__description');
const addCardForm = document.forms.newPlace;
const cardName = addCardForm.querySelector('.popup__input_type_card-name');
const cardLink = addCardForm.querySelector('.popup__input_type_url');

setPopupListeners();

export function processImgClick(event) {
  imgInPopup.src = event.target.src;
  imgInPopup.alt = event.target.alt;
  imgInPopupDescription.textContent = event.target.alt;
  openModal(popupImg);
}

initialCards.forEach((item) => {
  const newCard = createCard(item, deleteCard, likeCard, processImgClick);
  placeList.append(newCard);

});

profileEdit.addEventListener('click', () => {
  openModal(popupEdit);
  jobInput.value = jobValue.textContent;
  nameInput.value = nameValue.textContent;
});
profileAdd.addEventListener('click', () => {
  openModal(popupAdd);
});

// Функция редактирования профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closeModal();
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);


// Функция добавления карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault(); 
  const item = {
    name: '',
    link: '',
  };
  item.name = cardName.value;
  item.link = cardLink.value;
  const newCard = createCard(item, deleteCard, likeCard, processImgClick);
  placeList.prepend(newCard);
  addCardForm.reset();
  closeModal();
}

addCardForm.addEventListener('submit', handleCardFormSubmit);