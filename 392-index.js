/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s.length)
    return true
    let sInd = 0
    for (let ch of t) {
        if (ch == s[sInd]) {
            sInd++
        }
    }
    return sInd == s.length;
};
