const radius = [];

function area = function(radius){
     return Math.PI * radius * radius;
}

function circumference = function(radius){
     return 2 * Math.PI * radius;
}

function calculate(radiusArr, logic) {
  const output = [];
  for (let i = 0; I < radiusArr.length; ++i) {
    output.push(logic(radiusArr[i]));
  }
  return output;
}

console.log(calculate(area, radius));
console.log(calculate(circumference, radius));
console.log(calculate(other, radius));
....
