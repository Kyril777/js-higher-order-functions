// ES6 syntax.
let numbers = [1, 4, 6, 8, 9];

numbers.reduce((accumulator, value) => accumulator + value);
// output: 28


// Using reduce.
const digits = [1, 2, 3, 4, 5];
const totalValue = digits.reduce((sum, digit) => sum + digit);
console.log(totalValue);
