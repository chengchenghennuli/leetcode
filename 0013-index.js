/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500],   ["M", 1000]]);
  i = s.length - 1;
  n = map.get(s[i]);
  while (i > 0) {
    curr = map.get(s[i]);
    prev = map.get(s[i - 1]);
    prev >= curr ? n += prev : n -= prev;
    i--;
  }
    return n;
 };
