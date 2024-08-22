import { deleteCards, likeCards, dislikeCards } from './api';

export function createCard(item, deleteCard, likeCard, processImgClick) {
  const template = document.querySelector('#card-template').content;
  const card = template.cloneNode(true);
  const deleteButton = card.querySelector('.card__delete-button');
  const likeButton = card.querySelector('.card__like-button');
  const cardImg = card.querySelector('.card__image');
  const cardLikeCounter = card.querySelector('.card__like-counter');
  const cardOwner = item.owner._id;
  const userId = 'df0af4163426169488ebfcd5';
  const cardId = card.querySelector('.card');

  card.querySelector('.card__title').textContent = item.name;
  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardId._id = item._id;

  if (cardOwner !== userId) {
    deleteButton.style.display = 'none';
  };

  cardLikeCounter.textContent = item.likes.length;

  if (item.likes.some((like) => like._id === userId)) {
    likeButton.classList.add('card__like-button_is-active');
  };

  deleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', likeCard);
  cardImg.addEventListener('click', processImgClick);

  return card;
};

export function deleteCard(e) {
  deleteCards((e.target.closest('.card')._id));
  e.target.closest('.card').remove();
};

export function likeCard(e) {
  e.target.classList.toggle('card__like-button_is-active');
  const cardLikeCounter = e.target.closest('.card').querySelector('.card__like-counter');
  if (e.target.classList.contains('card__like-button_is-active')) {
  likeCards((e.target.closest('.card')._id))
    .then ((result) => {
      cardLikeCounter.textContent = result.likes.length;
    });
  } else {
    dislikeCards((e.target.closest('.card')._id))
    .then ((result) => {
      cardLikeCounter.textContent = result.likes.length;
    });
  }
}