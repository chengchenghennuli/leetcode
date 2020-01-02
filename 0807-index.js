/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  const i1 = grid.length;
  const j1 = grid[0].length;  
  const imax = Array(i1).fill(0)
  const jmax = Array(j1).fill(0)
  for (let i = 0; i < i1; i++){
      const row = grid[i]
      for (let j = 0; j <j1; j++){
          const n =row[j]
          imax[i] = Math.max(imax[i], n);
          jmax[j] = Math.max(jmax[j], n)
      }
  }
  let sum = 0;
  for (let i = 0; i < i1; i++){
      const row = grid[i]
      for (let j = 0; j < j1; j++){
          const n = row[j]
          const min = Math.min(imax[i], jmax[j]);
          sum += min - n;
      }
  }
  return sum;
};
