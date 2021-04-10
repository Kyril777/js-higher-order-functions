/* A function that returns a function. */

function cityMaker(city) {
  return function (state) {
    return city + ", " + state;
  };
}

let stateMaker = cityMaker("Topeka");
let result = stateMaker("Kansas");
console.log(result);


/* Passing Functions as Input. Source: Zaiste Programming */

const profile = fn => {
  console.log(`Started at ${Date()}`)
  const result = fn()
  console.log(`Computing: ${result}`)
  console.log(`End at ${Date()}`)
}

const compute = (x, y) => x + y;

profile(compute);


/* Creating Abstractions with Functions. Source Zaiste Programming. */

const isLargerThan = value => number => number > value;
  
const isLargerThan10 = isLargerThan(10)
const isLargerThan100 = isLargerThan(100)

const result = isLargerThan100(99)

console.log(result)


