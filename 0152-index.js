/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length;
    if (n === 0){
        return 0;
    }
    const xdp = Array(n);
    const ndp = Array(n);
    let [max] = nums;
    xdp[0] = ndp[0] = max;
    for (let i = 1; i < n; i++){
        const n = nums[i];
        const n1 = xdp[i - 1] * n;
        const n2 = ndp[i - 1] * n;
        xdp[i] = Math.max(n, n1, n2);
        ndp[i] = Math.min(n, n1, n2);
        max = Math.max(max, xdp[i]);
    }
    return max;
};
