/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const exp = /^(\-|\+)?[0-9]+/;
    const MAX = 2147483647;
    const MIN = -2147483648;
    const result = exp.exec(str.trim());
    if (!result){
        return 0
    }
    const num = +result[0]
    if (num > MAX){
        return MAX
    }
    if (num < MIN){
        return MIN
    }
    return  num;
};
