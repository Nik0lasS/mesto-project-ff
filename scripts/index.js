// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placeList = document.querySelector('.places__list');
const template = document.querySelector('#card-template').content;

function createCard(item, deleteCard) {
  const card = template.cloneNode(true);
  const deleteButton = card.querySelector('.card__delete-button');

  card.querySelector('.card__title').textContent = item.name;
  card.querySelector('.card__image').src = item.link;
  card.querySelector('.card__image').alt = item.name;

  deleteButton.addEventListener('click', deleteCard);

  return card;
};

function deleteCard(event) {
  event.target.closest('.card').remove();
};

initialCards.forEach((item) => {
  const newCard = createCard(item, deleteCard);
  placeList.append(newCard);

});