/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let str = '';
  while (n > 0) {
    const charCode = n % 26 || 26;
    str = String.fromCharCode(64 + charCode) + str;
    n -= charCode;
    n /= 26;
  }
  return str;
};
