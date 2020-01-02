/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let max = 0;
    for (let i = 0; i <nums.length; i++){
        nums[i] += Math.max(nums[i - 2] || 0, nums[i - 3] || 0 )
        max = Math.max(max, nums[i])
    }
   return max;
};
