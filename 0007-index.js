/**
 * @param {number} x
 * @return {number}
 */
module.exports = reverse;
const MAX = 2147483647;
const MIN = -2147483648;
var reverse = function(x) {
  let result = 0;
  while (x !== 0) {
    result = result * 10 + (x % 10 | 0);
    x = (x / 10) | 0;
  }
  if (result > MAX || result < MIN) {
    return 0;
  }
  return result;
};
