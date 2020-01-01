/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    dfs(0, []);
    return result;
    function dfs (index, cur){
        result.push(cur);
        for (let i = index; i < nums.length; i++){
            dfs(i + 1, [...cur, nums[i]])
        }
    }
};
