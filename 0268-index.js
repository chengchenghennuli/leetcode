/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const l = nums.length;
  const array = Array(l);
  for (let i = 0; i < l; i++) {
    array[nums[i]] = true;
  }
  for (let i = 0; i < l; i++) {
    const n = array[i];
    if (!n) {
      return i;
    }
  }
  return l;
};
