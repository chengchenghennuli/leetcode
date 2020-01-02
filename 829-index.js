/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function(N) {
    while ((N & 1) === 0) {
    N >>= 1;
   }
    let result = 1;
    let d = 3;
    while (d * d <= N) {
    let e = 0;
    while (N % d === 0) {
      N /= d;
      e++;
    }
    result *= e + 1;
    d += 2;
   }
    if (N > 1) {
    result <<= 1;
   }
    return result;
  };
