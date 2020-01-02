/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return format(S) === format(T);
}

  function format(str) {
  let l = str.length;
  let s = '';
  let skip = 0;
  while (--l >= 0) {
    const c = str[l];
    if (c === '#') {
      skip++;
      continue;
    }
    if (skip > 0) {
      skip--;
      continue;
    }
    s = c + s;
  }
  return s;
};
