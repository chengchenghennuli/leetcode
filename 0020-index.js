/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
    '(': ')',
    '[': ']',
    '{': '}',
   };
    const stack = [];
    let l = s.length;
    while (l--) {
    const c = s[l];
    if (!map[c]) {
      stack.push(c);
      continue;
    }
    if (map[c] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;

};
