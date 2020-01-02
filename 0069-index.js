/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 0) {
    return x;
  }
  let prev = 0;
  let result = 1;
  while (prev !== result) {
    prev = result;
    result = (result + x / result) / 2;
  }
  return Math.floor(result);
};
