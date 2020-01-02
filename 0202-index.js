/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const memo = {};
  while (!memo[n]) {
    if (n === 1) {
      return true;
    }
    memo[n] = true;
    let s = 0;
    while (n > 0) {
      s += Math.pow(n % 10 | 0, 2);
      n /= 10;
    }
    n = s;
  }
  return false;
};


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while (true){
        var sum = 0
        while (n > 0){
            var d = n % 10
            sum += d * d
            n = (n - d) / 10
        }
        if (sum == 1){
            return true
        }else if (sum == 4){
            return false
    } else {
           n = sum
     }
    }
};
