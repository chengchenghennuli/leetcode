/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let prev = [1];
    while (--n > 0) {
    let i = -1;
    let current;
    const l = prev.length;
    const nums = [];
    while (++i < l) {
      const n = prev[i];
      if (n !== current) {
        current = n;
        nums.push(1, n);
      } else {
        nums[nums.length - 2]++;
      }
    }
    prev = nums;
  }
  return prev.join('');
};
