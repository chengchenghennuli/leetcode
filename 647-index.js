/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const len = s.length;
    let count = 0; 
    if (!len) { return count; }
    const expand = (start, end) => {
    while (start >= 0 && end < len) {
      if (s[start] === s[end]) {
        count++;
        start--;
        end++;
      } else {
        return;
      }
    }
  };  
  for (let i = 0; i < len; i++) {
    expand(i, i);
    expand(i, i+1);
  }
  
  return count;
};
