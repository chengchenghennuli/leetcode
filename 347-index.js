/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}
    for (const n of nums){
        map[n] = ++map[n] || 1
    }
    const elems = Object.entries(map).sort(([, n1], [, n2]) => n2 - n1);
    const ans = Array(k);
    for (let i = 0; i < k; i++) {
    ans[i] = +elems[i][0];
  }
  return ans;
};
