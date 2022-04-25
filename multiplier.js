/* Function that returns a multiplier function.  */

const multiplyBy = (multiplier) {
  return function (multiplicand) {
    return multiplier * multiplicand;
  };
}

const multiplyByFour = multiplyBy(4);
const multiplyByFive = multiplyBy(5);

multiplyByFour(4); // 16
multiplyByFife(5); // 25
