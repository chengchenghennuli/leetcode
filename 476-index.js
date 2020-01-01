/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return num ^ (Math.pow(2, Math.ceil(Math.log2(num + 1))) - 1)
};
