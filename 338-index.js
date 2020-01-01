/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const bp = []
  bp[0] = 0
  for (let i = 1; i <= num; i++) {
    bp[i] = bp[i >> 1] + (i & 1)
  }
  return bp 

};
