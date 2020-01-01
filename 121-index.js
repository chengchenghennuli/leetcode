/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let max = 0;
    for (const p of prices){
        if (p < min){
            min = p
        } else{
            max = Math.max(max, p - min)
        }
    }
    return max;
};
