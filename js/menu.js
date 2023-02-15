import { startGame } from "./start.js";

export function createMenu() {
    const title = document.createElement('h2');
    title.textContent = 'Выберите сложность';
    title.classList.add('game__title');

    const menu = document.querySelector('.game');

    menu.innerHTML = '';
    document.querySelector('.congratulation').innerHTML = '';

    function createDifficultySelectionButton(difficulty) {
        const button = document.createElement('button');
        button.classList.add('game__difficulty-button');
        button.textContent = `${difficulty} карт`;
        button.addEventListener('click', () => {
            startGame(difficulty)
        })
        return button;
    }

   menu.append(
        title,
        createDifficultySelectionButton(10),
        createDifficultySelectionButton(12),
        createDifficultySelectionButton(14),
        createDifficultySelectionButton(16),
    )
}