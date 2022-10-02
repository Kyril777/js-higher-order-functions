/* Use reduce() function to accumulate values inside of an object. Pass an inital value of zero and force all elements in the array to pass through the function. */

const init = 0
let object = [{y: 21}, {y: 7}, {y: 2}, {y: 15}, {y: 38}]

let total = obj.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.y
}, init)

console.log(total)
