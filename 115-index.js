/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const sl = s.length;
    const tl = t.length;
    const dp = Array(tl).fill(0);
    for (let i = 0; i < sl; i++){
        const cs = s[i];
        for (let j = tl - 1; j >= 0; j--){
            if (t[j] == cs){
                dp[j] += j > 0 ? dp [j - 1] : 1;
            }
        }
    }
    return dp[tl - 1]
};
