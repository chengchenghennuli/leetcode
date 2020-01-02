/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || x % 1 !== 0) {
    return false;
  }
  const num = x;
  let result = 0;
  while (x !== 0) {
    result = result * 10 + Math.floor(x % 10);
    x = Math.floor(x / 10);
  }
  return num === result;
};
