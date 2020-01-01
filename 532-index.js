/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) {
  return 0;
  }
  const l = nums.length;
  const hash = {};
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    hash[n] = ++hash[n] || 1;
  }
  let result = 0;
  const answer = k === 0 ? 2 : 1;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    const d = n - k;
    if (hash[d] >= answer) {
      result++;
      hash[d] = 0;
    }
  }
  return result;
};
