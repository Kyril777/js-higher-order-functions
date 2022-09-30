/* Use reduce() function to subtract number in array. */

const numbs = [200, 75, 150, 10, 90];

let difference = numbs.reduce(
  (accumulator, currentValue) => accumulator - currentValue
);
console.log(difference); 


/* Use reduce function to subtract all expenses from salary. */
const expenses = [1800, 400, 250, 100, 25];
const salary = 5000;

let remainder = expenses.reduce(
  (accumulator, currentValue) => accumulator - currentValue,
  salary
);
console.log(remainder); 
