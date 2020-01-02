/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = {}
    for (let i = 0; i < nums.length; i++){
        if(nums[i] in hash && i - hash[nums[i]] <= k){
            return true;
        }
        hash[nums[i]] = i
    }
    return false
};
