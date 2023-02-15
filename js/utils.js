export function createCardsIconsArray(count) {
    const cardsIcons = [
        'house',
        'poo',
        'anchor',
        'hippo',
        'camera',
        'plane',
        'key',
        'paw'
    ];

    switch (count) {
        case 10:
            return cardsIcons.slice(0, 5);
        case 12:
            return cardsIcons.slice(0, 6);
        case 14:
            return cardsIcons.slice(0, 7);
        case 16:
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
