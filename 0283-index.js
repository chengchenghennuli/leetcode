/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var nextNonZeroPos = 0
       for (var i = 0; i < nums.length; i++){
           if (nums[i] !== 0){
               nums[nextNonZeroPos++] = nums[i]
           }
       }
       for(; nextNonZeroPos < nums.length; nextNonZeroPos){
           nums[nextNonZeroPos++] = 0
       }
};
