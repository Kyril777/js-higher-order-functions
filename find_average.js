/* Use reduce() function to find average. */

const figures = [30, 27, 22];

const average = figures.reduce((total, amount, index, array) => {
  total += amount
  return total/array.length
}, 0);

console.log(average)
