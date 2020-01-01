/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     const map = {}
     for (let i = 0; i < nums.length; i++){
     const n =nums[i]
     if (map[n]) {
         return true
     }
     map[n] = true
  }
     return false
}; 
