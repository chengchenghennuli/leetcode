/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) {
    return false;
  }
  let n = num;
  while (n % 2 === 0) {
    n /= 2;
  }
  return num === n * ((n + 1) / 2);
};


/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) {
    return false;
  }
  let n = num;
  while (n % 2 === 0) {
    n/= 2;
  }
  return num === n * ((n + 1) / 2);
};
