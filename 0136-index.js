/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let l = nums.length;
  let result = 0;
  while (l--) {
    result ^= nums[l];
  }
  return result;
};
