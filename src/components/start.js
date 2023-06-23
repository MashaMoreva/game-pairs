import { createGameCard } from "./card.js";
import { createMenu } from "./menu.js";
import { createCardsIconsArray, duplicateArray, shuffle } from "./utils.js";

export function startGame(difficulty) {
  let firstCard = null;
  let secondCard = null;
  let clickable = false;
  let timer;
  let timerInterval;

  switch (difficulty) {
    case 12:
      timer = 30;
      break;
    case 18:
      timer = 45;
      break;
    case 24:
      timer = 60;
      break;
    case 30:
      timer = 75;
      break;
    default:
      timer = 60;
  }

  const game = document.querySelector(".game");
  game.innerHTML = "";

  const gameBoard = document.createElement("div");
  gameBoard.classList.add("game__board");

  const restartButton = document.createElement("button");
  restartButton.classList.add("game__restart-button");
  restartButton.textContent = "Restart";
  restartButton.addEventListener("click", () => startGame(difficulty));

  const difficultyButton = document.createElement("button");
  difficultyButton.classList.add("game__difficulty-button");
  difficultyButton.textContent = "Выбрать сложность";
  difficultyButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    game.innerHTML = "";
    createMenu();
  });

  const timerElement = document.createElement("div");
  timerElement.classList.add("game__timer");
  timerElement.textContent = `У вас будет всего ${timer} секунд, откройте первую карточку`;
  game.append(gameBoard, timerElement, difficultyButton);

  const cardsIcons = createCardsIconsArray(difficulty);
  const duplicatedCardsIcons = duplicateArray(cardsIcons);
  shuffle(duplicatedCardsIcons);

  duplicatedCardsIcons.forEach((icon) => {
    gameBoard.append(createGameCard("question", icon));
  });

  const cards = document.querySelectorAll(".game__card");
  cards.forEach((card, index) =>
    card.addEventListener("click", () => {
      if (!clickable && !card.classList.contains("success")) {
        clickable = true;
        timerElement.style.display = "block";
        game.append(restartButton);
        startTimer();
      }

      if (!card.classList.contains("open")) {
        card.classList.add("open");

        if (firstCard === null) {
          firstCard = index;
        } else {
          if (index !== firstCard) {
            secondCard = index;
            clickable = false;
          }
        }

        if (
          firstCard !== null &&
          secondCard !== null &&
          firstCard !== secondCard
        ) {
          if (
            cards[firstCard].firstElementChild.className ===
            cards[secondCard].firstElementChild.className
          ) {
            setTimeout(() => {
              cards[firstCard].classList.add("success");
              cards[secondCard].classList.add("success");
              firstCard = null;
              secondCard = null;
              clickable = true;
              checkGameEnd();
            }, 400);
          } else {
            setTimeout(() => {
              cards[firstCard].classList.remove("open");
              cards[secondCard].classList.remove("open");
              firstCard = null;
              secondCard = null;
              clickable = true;
              checkGameEnd();
            }, 400);
          }
        }
      }
    })
  );

  function startTimer() {
    timerInterval = setInterval(() => {
      timer--;
      timerElement.textContent = `Осталось времени: ${timer} сек.`;

      if (timer === 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Время истекло =(";
        restartButton.textContent = "Начать заново";
        cards.forEach((card) => {
          card.classList.remove("open");
          clickable = false;
        });
      }
    }, 1000);
  }

  function checkGameEnd() {
    const openedCards = document.querySelectorAll(".game__card.open");
    const successCards = document.querySelectorAll(".game__card.success");

    if (
      openedCards.length === cards.length ||
      successCards.length === cards.length
    ) {
      clearInterval(timerInterval);
      timerElement.textContent = "Вы выиграли =)";
      restartButton.textContent = "Начать заново";
      cards.forEach((card) => {
        card.disabled = true;
      });
    }
  }
}
