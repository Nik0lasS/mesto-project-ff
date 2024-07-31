// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import '../styles/index.css';
import { initialCards, createCard, deleteCard, likeCard } from './cards.js';
import { openModal } from './modal.js';

export const placeList = document.querySelector('.places__list');

export function processImgClick(event) {
  const popupImg = document.querySelector('.popup_type_image');
  // popupImg.classList.toggle('popup_is-opened');
  popupImg.querySelector('.popup__image').src = event.target.src;
  popupImg.querySelector('.popup__image').alt = event.target.alt;
  popupImg.querySelector('.popup__caption').textContent = event.target.alt;
  openModal(popupImg);
}

initialCards.forEach((item) => {
  const newCard = createCard(item, deleteCard, likeCard, processImgClick);
  placeList.append(newCard);

});

const profileEdit = document.querySelector('.profile__edit-button');
const profileAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');

profileEdit.addEventListener('click', () => {
  openModal(popupEdit);
  jobInput.value = jobValue.textContent;
  nameInput.value = nameValue.textContent;
});
profileAdd.addEventListener('click', () => {
  openModal(popupAdd);
});

// Функция редактирования профиля
const editProfileForm = document.forms.editProfile;
const nameInput = editProfileForm.querySelector('.popup__input_type_name');
const jobInput = editProfileForm.querySelector('.popup__input_type_description');
const nameValue = document.querySelector('.profile__title');
const jobValue = document.querySelector('.profile__description');

export function handleFormSubmit(evt) {
    evt.preventDefault(); 
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    popupEdit.classList.remove('popup_is-opened');
}

editProfileForm.addEventListener('submit', handleFormSubmit);


// Функция добавления карточки
const addCardForm = document.forms.newPlace;
const cardName = addCardForm.querySelector('.popup__input_type_card-name');
const cardLink = addCardForm.querySelector('.popup__input_type_url');

function handleFormSubmit2(evt) {
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
  popupAdd.classList.remove('popup_is-opened');
}

addCardForm.addEventListener('submit', handleFormSubmit2);