/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const r = grid.length;
    const c = grid[0].length;
    const dp = Array(c).fill(0);
    for (let i = 0; i < r; i++){
        const row= grid[i];
        for (let j = 0; j < c; j++) {
        const n = row[j];
        if (j === 0){
            dp[j] += n
        }else if (i === 0){
            dp[j] = dp[j -1] + n;
        }else{
            dp[j] = Math.min(dp[j - 1] + n, dp[j] + n);
        }
    }
  }
    return dp[c - 1];
};
