/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
        let sum = 0;
        let min = 0;
        let max = -Infinity;
        for (const n of nums){
            sum +=n;
            max = Math.max(max,sum - min,n)
            min = Math.min(min,sum);          
        }
        return max;
};
