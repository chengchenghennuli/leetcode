/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let max = 0;
    for (let p of prices){
        if (p >= min){
            max += p - min;
        }
        min = p;
    }
    return max;
};
