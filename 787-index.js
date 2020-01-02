/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  let prev;
  let curr = Array(n).fill(Infinity);
  curr[src] = 0;
  for (let i = 0; i <= K; i++) {
    [curr, prev] = [[...curr], curr];
    for (const [s, d, c] of flights) {
      curr[d] = Math.min(curr[d], prev[s] + c);
    }
  }
  const cost = curr[dst];
  return cost === Infinity ? -1 : cost;
}
