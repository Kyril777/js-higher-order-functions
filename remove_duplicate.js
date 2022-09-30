/* Use reduce() function to remove duplicate arrays. */

let numbers = [2, 11, 88, 88, 51, 18, 11, 5, 2, 31, 74];
let uniqueNumbers = numbers.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueNumbers); 
