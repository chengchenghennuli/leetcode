/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let prev = 1;
  let cur = n < 2 ? n : 2;
  while (--n> 1) {
    [cur, prev] = [cur + prev, cur];
  }
  return cur;
};
