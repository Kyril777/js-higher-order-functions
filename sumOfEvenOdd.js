/* Use the reduce() function to sum the even and odd numbers separately. */

const numbers = [3, 8, 15, 22, 33, 26, 5];

const sumEvenOdd = numbers.reduce((acc, current) => current % 2 === 0 ? {...acc,'even':acc['even'] + current} :  {...acc, 'odd':acc['odd'] + current}, {"even":0, "odd":0})}

console.log(sumEvenOdd)
