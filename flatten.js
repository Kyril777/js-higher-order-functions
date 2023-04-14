/* Use flatMap() method to map each elements of an array, create a new array and flatten result into that new array. */

const array = ['Dennis Mendez', 'Saleh Assad'];
const newArray = array.flatMap(str =? str.split(''));
console.log(newArray); // ['Dennis', 'Mendez', 'Saleh', 'Assad']
