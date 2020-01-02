/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const arr = [...nums];
  arr.sort((n1, n2) => n1 - n2);
  const size = nums.length;
  let l = size;
  let r = 0;
  for (let i = 0; i < size; i++) {
    if (arr[i] !== nums[i]) {
      l = Math.min(l, i);
      r = Math.max(r, i);
    }
  }
  return r <= l ? 0 : r - l + 1;
};
