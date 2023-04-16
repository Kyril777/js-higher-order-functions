/* Use filter method to return positive value. */

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let pos_nums = nums.filter((e) => e > 0);

return pos_nums;


/* Use flatMap method to return only positive values. */

const arr = [5, 4, -3, 20, 17, -33, -4, 18];

const only_positives = arr.flatMap((n) => {
  if (n < 0) {
    return [];
  } else (n > 0); {
  	return n;
  }
  
});
console.log(only_positives); // [6, 7, 99, 91]
