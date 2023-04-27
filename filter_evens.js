/* Use filter method to print all even numbers. */

const numbers = [3, 78, 99, 6, 714, 805, 31, 12, 500];
const even = numbers.filter((numb) => numb % 2 === 0)

console.log(even) // 78, 6, 714, 12, 500


const array = [-100, -365, -42, -8, 0, 13, 99];

const evens = array.filter((x) => {
   return x % 2 === 0;
})

console.log(evens); // [-100, -42, -8, 0]
