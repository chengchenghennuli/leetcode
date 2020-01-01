/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let curIndex = candidates.length - 1
    const result = []
    dfs(curIndex, target, [])
    return result;
    function dfs(index, cur, arr){
        if (cur < 0){
            return;
        }
        if (cur === 0){
            result.push([...arr])
            return;
        }
        do {
            const candidate = candidates[index]
            arr.push(candidate)
            dfs (index, cur - candidate, arr)
            arr.pop();
        }while (index--)
    }
};
