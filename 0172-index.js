/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    /*let result = 0;
    while (n > 0) {
    n = (n / 5) | 0;
    result += n;
  }
   return result;*/
     n = (n / 5) | 0;
    return n === 0 ? 0: n + trailingZeroes(n);
};


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result = 0;
    while (n > 0) {
    n = (n / 5) | 0;
    result += n;
  }
   return result;
};
