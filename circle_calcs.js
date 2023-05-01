/* Create a reusable function that accepts the radius values and logic functions as parameters.*/

const radius = [2, 4, 6, 6];

//  Logic to calculate area.
const area = function(radius){
    return Math.PI * radius * radius;
}

// Logic to calculate the diameter.
const diameter = function(radius){
    return 2 * radius;
}

// Logic to calculate the circumference.
const circumference = function(radius){
    return Math.PI * 2 * radius;
}

// Function to calculate area a
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));
