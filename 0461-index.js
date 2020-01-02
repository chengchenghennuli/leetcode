/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var count = 0;
    var z = x ^ y
    while (z != 0){
        z = z & (z - 1)
        count++
    }
    return count
};
