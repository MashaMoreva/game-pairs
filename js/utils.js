export function createCardsIconsArray(count) {
    const cardsIcons = [
        'house',
        'ship',
        'anchor',
        'hippo',
        'dog',
        'plane',
        'planet-ringed',
        'paw',
        'earth-americas',
        'champagne-glasses',
        'burger-fries',
        'burger-fries',
    ];

    switch (count) {
        case 12:
            return cardsIcons.slice(0, 6);
        case 16:
            return cardsIcons.slice(0, 8);
        case 20:
            return cardsIcons.slice(0, 10);
        case 28:
            return cardsIcons.slice(0, 14);
        case 32:
            return cardsIcons;
        default:
            break;
    }
    return cardsIcons
};

export function duplicateArray(array) {
    return array.reduce(function (res, current) {
        return res.concat([current, current]);
    }, []);
};


export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};
