/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    if(!nums || nums.length < 3) return 0;
    nums.sort ((a, b) => a - b)
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        let left = 0, right = i - 1;
        while (left < right){
            if (nums[left] + nums[right] > nums[i]) result += right-- -left;
            else left++; 
        }
    }
    return result;
};
