/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let l = nums.length;
  let prev;
  while (l--) {
    const n = nums[l];
    if (n === prev) {
      nums.splice(l, 1);
    } else {
      prev = n;
    }
  }
  return nums.length;
};
