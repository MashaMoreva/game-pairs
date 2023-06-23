export function createCardsIconsArray(count) {
  const cardsIcons = [
    "ship",
    "anchor",
    "hippo",
    "dog",
    "paw",
    "earth-americas",
    "champagne-glasses",
    "glasses",
    "umbrella",
    "plane",
    "gift",
    "tree",
    "mountain-sun",
    "crown",
    "plug",
  ];

  switch (count) {
    case 12:
      return cardsIcons.slice(0, 6);
    case 18:
      return cardsIcons.slice(0, 9);
    case 24:
      return cardsIcons.slice(0, 12);
    case 30:
      return cardsIcons;
    default:
      break;
  }
  return cardsIcons;
}

export function duplicateArray(array) {
  return array.reduce(function (res, current) {
    return res.concat([current, current]);
  }, []);
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function getCardEnding(count) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (
    (lastDigit === 2 || lastDigit === 4) &&
    lastTwoDigits !== 12 &&
    lastTwoDigits !== 14
  ) {
    return "карты";
  } else if (lastDigit === 1 && lastTwoDigits !== 11) {
    return "карта";
  } else {
    return "карт";
  }
}
