import { createGameCard } from "./card.js";
import { createMenu } from "./menu.js";
import { createCardsIconsArray, duplicateArray, shuffle } from "./utils.js";

export function startGame(difficulty) {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const game = document.querySelector('.game');
    game.innerHTML = '';

    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game__board');

    const restartButton = document.createElement('button');
    restartButton.classList.add('game__restart-button');
    restartButton.textContent = 'Начать заново';
    restartButton.addEventListener('click', createMenu);

    const cardsIcons = createCardsIconsArray(difficulty);
    const duplicatedCardsIcons = duplicateArray(cardsIcons);
    shuffle(duplicatedCardsIcons);

    duplicatedCardsIcons.forEach((icon) => {
        gameBoard.append(createGameCard('cards-blank', icon))

    });

    game.append(gameBoard, restartButton);

    const cards = document.querySelectorAll('.game__card');
    cards.forEach((card, index) => card.addEventListener('click', () => {
        if (clickable == true && !card.classList.contains('success')) {
            card.classList.add('open');

            if (firstCard == null) {
                firstCard = index;
            } else {
                if (index != firstCard) {
                    secondCard = index;
                    clickable = false
                }
            }

            if (firstCard != null && secondCard != null && firstCard != secondCard) {
                if (
                    cards[firstCard].firstElementChild.className === cards[secondCard].firstElementChild.className
                ) {
                    setTimeout(() => {
                        cards[firstCard].classList.add('success');
                        cards[secondCard].classList.add('success');
                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 400);
                } else {
                    setTimeout(() => {
                        cards[firstCard].classList.remove('open');
                        cards[secondCard].classList.remove('open');
                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 400);
                }
            }
        }

    }))
}
