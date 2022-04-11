/* Use the .filter() method to return a new array with the elements that pass our conditions. */

const ages = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,30,33,26,39,42,27,52,57]

let mayDrink = []

for (let i = 0; i < ages.length; i++){
  if (ages[i] >= 21){
    mayDrink.push(ages[i])
  }
}

console.log(mayDrink)

