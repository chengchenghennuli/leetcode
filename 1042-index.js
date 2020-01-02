/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    const map = {}
    for (let [x, y] of paths){
        x--
        y--
        map[x] = map[x] || []
        map[x].push(y)
        map[y] = map[y] || []
        map[y].push(x)
    }
    const ans = Array(N)
    for (let x = 0; x < N; x++){
        const arr = map[x] ||[]
        const set = new Set()
        for (const y of arr){
            ans[y] && set.add(ans[y])
        }
        for (let i = 1; i <= 4; i++){
            if(!set.has(i)){
                ans[x] = i
                break
            }
        }
    }
    return ans
};
