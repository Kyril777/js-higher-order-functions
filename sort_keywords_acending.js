/* Sort an array in descending order using sort(). */

const keywords = [
    {
        key: 22,
        value: 'hammer',
    },
    {
        key: 25,
        value: 'quarks',
    },
    {
        key: 21,
        value: 'Omaha',
    },
    {
        key: 23,
        value: 'federal',
    },
    {
        key: 24,
        value: 'elbow',
    },
    {
        key: 20,
        value: 'latitude',
    },
];

keywords.sort((firstValue, secondValue) => {
    if (firstValue.key < secondValue.key) {
        return -1;
    } else {
        return 1;
    }
});

keywords.forEach((value) => {
    console.log(`${value.key} ${value.value}`)
});
