/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  var i = 0,
  j = nums.length - 1;
  var c = 0;
  while (i < j) {
    c += nums[j] - nums[i];
    i++;
    j--;
  }
  return c;
};
