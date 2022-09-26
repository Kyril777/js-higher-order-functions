/* Use map() function to convert string into an array. */

const name = "SHIELD"
const map = Array.prototype.map

const array = map.call(name, eachLetter => {
    return `${eachLetter}`
})

console.log(array)
