/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map();
    for (const n of nums){
        const s = map.has(n) ? map.get(n) : 0;
        map.set(n, s + 1);
    }
    let max = 0;
    for (const n of map.keys()){
        if (map.has(n + 1)){
            max = Math.max(max, map.get(n) + map.get(n + 1));
        }
    }
    return max;
};
