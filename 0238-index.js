/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     let n = nums.length;
     const sum = Array(n)
     let left = 1;
     for (let i = 0; i < n; i++){
         sum[i] = nums[i] * left;
         left *= nums[i];
     }
     let right = 1;
     for (let i = n - 1; i >=0; i--){
     const l = i == 0 ? 1 : sum[i- 1];
     sum[i] = right * l; 
     right *= nums[i]
     }
     return sum;
};
