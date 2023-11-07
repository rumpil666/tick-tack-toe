import '../assets/styles/index.css';

const block = document.querySelectorAll('.playfield__block');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup__title');
const blockArr = Array.from(block);
const restartButton = document.querySelector('.content__button');
let win = false;
let playerArr;
let player = 'x';
const winLine = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function escapeClose(e) {
  if (e.key === 'Escape') {
    selectedText = -1;
    popup.classList.remove('popup--open');
  }
}

function openPopup(title) {
  popup.classList.add('popup--open');
  document.addEventListener('keydown', escapeClose);
  popupTitle.textContent = title;
}

function closePopup() {
  popup.classList.remove('popup--open');
  document.removeEventListener('keydown', escapeClose);
}

function getPlayerArr() {
  const newArr = [];
  blockArr.forEach((element, i) => {
    if (element.textContent === '') {
      return;
    }
    if (element.textContent === player) {
      newArr.push(i);
    }
  })
  return newArr;
}

function handleClickBlock(e) {
  if (win === true) return;
  if (e.target.textContent === '') {
    e.target.textContent = player;
    e.target.disabled = true;
    playerArr = getPlayerArr();
    player === 'x' ? player = 'o' : player = 'x'
  }
  setTimeout(visibiliteGameOver, 0);
}

function checkGameOver(arr) {
  const playerWin = winLine.some((elem) => {
    for (let i = 0; i < elem.length; i++) {
      if (arr.indexOf(elem[i]) == -1) return false;
    }
    return true;
  })
  return playerWin;
}

function visibiliteGameOver() {
  if (checkGameOver(playerArr)) {
    player === 'x' ? player = 'o' : player = 'x';
    win = true;
    openPopup(`Победил игрок играющий ${player === 'x' ? 'крестиками' : 'ноликами'}`)
  }

  const test = blockArr.findIndex((elem) => elem.textContent === '')
  if (test === -1) {
    openPopup(`Ух какая битва. У вас ничья!!!`)
  }
}

function handleResstart() {
  blockArr.map(element => element.textContent = '')
  player = 'x';
  win = false;
}

document.addEventListener('click', closePopup);
restartButton.addEventListener('click', handleResstart);
blockArr.forEach((element) => element.addEventListener('click', (e) => {
  handleClickBlock(e)
}))
