/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let i = -1;
    let result = 0;
    const l = s.length;
    while (++i < l) {
      const n = s[i].charCodeAt() - 64;
      result += n * 26 ** (l - i - 1);
  }
     return result;
};
