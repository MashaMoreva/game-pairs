export function createGameCard(defaultCardIcon, openedCardIcon) {
    const card = document.createElement('div');
    card.classList.add('game__card');

    const notOpenedCard = document.createElement('i');
    const openedCard = document.createElement('i');

    notOpenedCard.classList.add('fa', `fa-${defaultCardIcon}`);
    openedCard.classList.add('fa', `fa-${openedCardIcon}`);

    card.append(openedCard, notOpenedCard);

    return card;
}