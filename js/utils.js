export function createCardsIconsArray(count) {
    const cardsIcons = [
        'house-night',
        'ship',
        'anchor',
        'hippo',
        'dog',
        'planet-ringed',
        'paw',
        'earth-americas',
        'champagne-glasses',
        'burger-fries',
        'teddy-bear',
        'glasses',
        'gamepad-modern',
        'tricycle',
        'umbrella',
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
