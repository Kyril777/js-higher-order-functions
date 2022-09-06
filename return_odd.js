/* Use filter method to return odd numbers out of array. */

const numbers = [1, 2, 3, 4, 5];

const returnOdd = numbers.filter((number) => number % 2 !== 0);
console.log(returnOdd);
