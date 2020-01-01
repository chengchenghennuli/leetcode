/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let x = num;
    while(x * x > num){
        x = (x + num / x) >>> 1;                
    }
    return x * x === num;
};
