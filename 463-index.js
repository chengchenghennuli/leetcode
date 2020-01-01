/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const yl = grid.length;
    const xl = yl && grid[0].length;
    let count = 0;
    for (let y = 0; y < yl; y++) {
    const row = grid[y];
    for (let x = 0; x < xl; x++) {
      const n = row[x];
      if (n === 0) {
        continue;
      }
      if (row[x - 1] !== 1) {
        count++;
      }
      if (row[x + 1] !== 1) {
        count++;
      }
      if (y === 0) {
        count++;
      } else if (grid[y - 1][x] !== 1) {
        count++;
      }
      const yd = y + 1;
      if (yd === yl) {
        count++;
      } else if (grid[yd][x] !== 1) {
        count++;
      }
    }
  }
    return count;
};
