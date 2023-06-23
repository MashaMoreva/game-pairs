import { startGame } from "./start.js";
import { getCardEnding } from "./utils.js";

export function createMenu() {
  const title = document.createElement("h2");
  title.textContent = "Выберите сложность";
  title.classList.add("game__title");

  const menu = document.querySelector(".game");

  function createDifficultySelectionButton(difficulty) {
    const button = document.createElement("button");
    button.classList.add("game__difficulty-button");
    const ending = getCardEnding(difficulty);
    button.textContent = `${difficulty} ${ending}`;
    button.addEventListener("click", () => {
      startGame(difficulty);
    });
    return button;
  }

  menu.append(
    title,
    createDifficultySelectionButton(12),
    createDifficultySelectionButton(18),
    createDifficultySelectionButton(24),
    createDifficultySelectionButton(30)
  );
}
