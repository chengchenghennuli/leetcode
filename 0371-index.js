/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let r = a;
  let n =b;
  while (n !==0) {
      a = r;
      r ^= n;
      n = (a & n) << 1
  }
  return r;
};
