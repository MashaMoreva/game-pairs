/// <reference types="cypress" />

import { shuffle } from "../../src/components/utils.js";

describe("Приложение Memory Game", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500");
    cy.contains("12 карт").click();
  });

  it("проверка начального состояния игры", () => {
    cy.get(".game__card").should("have.length", 12);
    cy.get(".game__card .fa-question").should("be.visible");
  });

  it("открывает произвольную карточку и она остается открытой", () => {
    cy.get(".game__card .fa-question:visible").then(($cards) => {
      const randomIndex = Math.floor(Math.random() * $cards.length);
      const randomCard = $cards[randomIndex];

      cy.wrap(randomCard).click();
    });
    cy.get(".game__card.open").should("have.length", 1);
  });

  it("находит пару карточек и оставляет их открытыми, закрывает непарные", () => {
    const maxAttempts = 100;

    function findPair(attempts) {
      if (attempts >= maxAttempts) {
        cy.log("Максимальное количество попыток превышено");
        return;
      }

      const cardIndices = shuffle([...Array(12).keys()]);

      const [index1, index2] = cardIndices.slice(0, 2);

      cy.get(".game__card .fa-question").eq(index1).click();
      cy.wait(500);
      cy.get(".game__card .fa-question").eq(index2).click();
      cy.wait(500);

      cy.window().then((win) => {
        const successfulCards = win.document.querySelectorAll(
          ".game__card.open.success"
        );
        if (successfulCards.length === 2) {
          cy.get(".game__card.open").should("have.length", 2);
        } else {
          cy.get(".game__card.open").should("have.length", 0);
          findPair(attempts + 1);
        }
      });
    }

    findPair(0);
  });
});
