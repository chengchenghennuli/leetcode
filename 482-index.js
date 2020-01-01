/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.toUpperCase();
    let str = '';
    let l = S.length;
    while (l--) {
    let c = S[l];
    if (c === '-') {
      continue;
    }
    if (str.length % (K + 1) === K) {
      c += '-';
    }
    str = c + str;
  }
  return str;
};
