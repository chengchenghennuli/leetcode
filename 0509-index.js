/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    const result = [0, 1]
    for (let i = 2; i <= N; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return N === 0 ? 0 : result[result.length - 1]
};
