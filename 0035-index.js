/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = -1;
    const l = nums.length;
    while (++i < l && nums[i] < target) {}
    return i;
};
