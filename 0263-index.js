class Solution:
def isUgly(self, num: int) -> bool:
if num < 1:
return False
return 3046798700052480000000000000 % num == 0


/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0){
    return false;
  }
  const factors = [2,3,5 ];
  let l = factors.length;
  while (l--) {
    const f = factors[l];
    while (num % f === 0) {
      num /= f;
    }
  }
  return num === 1;
};
        
        
        
