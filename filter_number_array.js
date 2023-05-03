const randomNumbers = [4, 11, 42, 14, 39, 20];

/* Use filter() to find all numbers less than 20. */
const lessThanTwenty = randomNumbers.filter(n => {  
  return n <= 20;
});

/* Use filter() to find all numbers divisible by 3. */
const divisibleByThree = randomNumbers.filter(n => { 
  return n % 3 === 0
});

console.log(lessThanTwenty); // [4, 11, 14, 20]
console.log(divisibleByThree); // [42, 39]
