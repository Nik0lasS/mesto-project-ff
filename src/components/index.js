// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import '../styles/index.css';
import { createCard, deleteCard, likeCard } from './cards.js';
import { openModal, closeModal, setPopupListeners } from './modal.js';
import { enableValidation, clearValidation } from './validation.js';
import { getInitialCards, getUserInfo, updateUserInfo, addCard, updateUserAvatar } from './api.js';

const profile = document.querySelector('.profile');
const placeList = document.querySelector('.places__list');
const popupImg = document.querySelector('.popup_type_image');
const imgInPopup = popupImg.querySelector('.popup__image');
const imgInPopupDescription = popupImg.querySelector('.popup__caption');
const profileEdit = document.querySelector('.profile__edit-button');
const profileAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupAvatar = document.querySelector('.popup_type_user_avatar');
const updateAvatarForm = document.forms.editAvatar;
const profileAvatar = profile.querySelector('.profile__image');
const profileAvatarInput = popupAvatar.querySelector('.popup__input_type_user_avatar');
const editProfileForm = document.forms.editProfile;
const profileInput = { 
  name: editProfileForm.querySelector('.popup__input_type_name'),
  about: editProfileForm.querySelector('.popup__input_type_description'),
};
const profileValue = {
  name: profile.querySelector('.profile__title'),
  about: profile.querySelector('.profile__description'),
};
const addCardForm = document.forms.newPlace;
const cardData = {
  name: addCardForm.querySelector('.popup__input_type_card-name'),
  link: addCardForm.querySelector('.popup__input_type_url'),
};
export let userId = "";

setPopupListeners();

export function processImgClick(e) {
  imgInPopup.src = e.target.src;
  imgInPopup.alt = e.target.alt;
  imgInPopupDescription.textContent = e.target.alt;
  openModal(popupImg);
}

profileEdit.addEventListener('click', () => {
  openModal(popupEdit);
  profileInput.about.value = profileValue.about.textContent;
  profileInput.name.value = profileValue.name.textContent;
  clearValidation(editProfileForm, validationConfig);
});
profileAdd.addEventListener('click', () => {
  openModal(popupAdd);

});

profileAvatar.addEventListener('click', () => {
  openModal(popupAvatar);
});

// Функция редактирования аватара
function handleAvatarFormSubmit(e) {
  e.preventDefault();
  updateAvatarForm.querySelector('.popup__button').textContent = 'Сохранение...';
  const link = profileAvatarInput.value;
  updateUserAvatar(link)
    .then(() => {
      closeModal();
      profile.querySelector('.profile__image').style = `background-image: url(${profileAvatarInput.value});`;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      updateAvatarForm.querySelector('.popup__button').textContent = 'Сохранить';
    })
}

updateAvatarForm.addEventListener('submit', handleAvatarFormSubmit);


// Функция редактирования профиля
function handleProfileFormSubmit(e) {
    e.preventDefault(); 
    editProfileForm.querySelector('.popup__button').textContent = 'Сохранение...';
    updateUserInfo(profileInput)
      .then(() => {
        profileValue.name.textContent = profileInput.name.value;
        profileValue.about.textContent = profileInput.about.value;
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        editProfileForm.querySelector('.popup__button').textContent = 'Сохранить';
      });
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);


// Функция добавления карточки
function handleCardFormSubmit(e) {
  e.preventDefault(); 
  addCardForm.querySelector('.popup__button').textContent = 'Сохранение...';
  const item = {
    name: '',
    link: '',
    owner : {
      _id: '',
    },
    likes: [],
    _id: '',
  };
  item.name = cardData.name.value;
  item.link = cardData.link.value;
  item.owner._id = userId;

  addCard(item)
  .then((res) => {
    item._id = res._id;
    const newCard = createCard(item, deleteCard, likeCard, processImgClick);
    placeList.prepend(newCard);
    addCardForm.reset();
    closeModal();
    clearValidation(addCardForm, validationConfig);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    editProfileForm.querySelector('.popup__button').textContent = 'Сохранить';
  });
}

addCardForm.addEventListener('submit', handleCardFormSubmit);


export const validationConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  buttonElement: '.popup__button',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_active',
};

enableValidation (validationConfig);

const setUserInfo = (data) => {
  profile.querySelector('.profile__title').textContent = data.name;
  profile.querySelector('.profile__description').textContent = data.about;
  profile.querySelector('.profile__image').style = `background-image: url(${data.avatar});`;
}

Promise.all([getUserInfo(), getInitialCards()])
  .then(data => {
    const userInfo = data[0];
    const cards = data[1];
    setUserInfo(userInfo);
    userId = userInfo._id;
    cards.forEach((item) => {
      const newCard = createCard(item, deleteCard, likeCard, processImgClick);
      placeList.append(newCard);
    })
  })
  .catch((err) => {
    console.log(err);
  });