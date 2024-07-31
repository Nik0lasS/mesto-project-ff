export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

export function createCard(item, deleteCard, likeCard, processImgClick) {
  const template = document.querySelector('#card-template').content;
  const card = template.cloneNode(true);
  const deleteButton = card.querySelector('.card__delete-button');
  const likeButton = card.querySelector('.card__like-button');
  const cardImg = card.querySelector('.card__image');

  card.querySelector('.card__title').textContent = item.name;
  cardImg.src = item.link;
  cardImg.alt = item.name;

  deleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', likeCard);
  cardImg.addEventListener('click', processImgClick);

  return card;
};

export function deleteCard(event) {
  event.target.closest('.card').remove();
};

export function likeCard(event) {
  event.target.classList.toggle('card__like-button_is-active');
}``