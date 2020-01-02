/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   const map = {};
   const l = s.length;
   for (let i = 0; i < l; i++) {
     const c = s.charAt(i);
     map[c] = map[c] === undefined ? i : -1;
  }
   for (let i = 0; i < l; i++) {
    if (map[s.charAt(i)] >= 0) {
      return i;
    }
  }
  return -1;
};
