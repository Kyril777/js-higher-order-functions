// Assigns functions to variables.
const greeting = function () {
	console.log('Mahalo!');
};

greeting(); // 'Mahalo!'


// Passes functions as arguments.
function greeting(name) {
	console.log('Mahalo, ' + name);
}

function sayMahalo(greeting, name) {
	greeting(name);
}

sayMahalo(greeting, 'Kai'); // 'Mahalo, Kai'


// Returns functions from functions.
function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const times5 = createMultiplier(5);
console.log(times5(5)) // 25


// Stores functions in arrays or objects.
const myFunctions = [
  function () {
    console.log('First function')
  },
  function () {
    console.log('Second function')
  },
  function () {
    console.log('Third function')
  }
];

myFunctions[2](); // 'Third function'
