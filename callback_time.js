/* Create a timer function to see how long it took for a callback to run. */

let timer = (callback) => {
  
  // Return a new function that accepts arguments.
	return (...args) => {
    
    // Mark when function started.
  	const then = Date.now();
    
    // Call the original function and pass in arguments.
    const results = callback.apply(null, args);
    
    // Mark when function ended. 
    const now = Date.now();
    
    // Calculate the difference between when the function ended and started.
    console.log(`${now - then}ms`);

    return results;
  };
}

/* Create a fibonacci function (as an example). */
let fibonacci = (n) => {
	if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n-1) + fibonacci(n-2)
}

/* Pass the fibonacci as a parameter.  */
const wrapped = timer(fibonacci)

console.log(wrapped(25)) // Time: "11ms" Fibonacci sequence: 75025
