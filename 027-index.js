/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = nums.length;
    while (l--){
        if (nums [l] !== val){
            continue;
        }
        nums.splice(l, 1);
    }
    return nums.length;
};


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const l = nums.length;
  let i = -1;
  let length = 0;
  while (++i < l) {
    const n = nums[i];
    if (n === val) {
      continue;
    }
    nums[length++] = n;
  }
  return length;
};
