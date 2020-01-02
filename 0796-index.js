/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  /*const l = A.length;
  const t = B[0];
  for (let i = 0; i < l; i++) {
    const c = A[i];
    if (c !== t) {
      continue;
    }
    const str = A.substr(i) + A.substr(0, i);
    if (str === B) {
      return true;
    }
  }
    return false*/
    return A.length == B.length && (A + A).indexOf(B) >= 0
};
