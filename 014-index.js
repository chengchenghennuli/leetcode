/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const l = strs.length;
    const [str = ''] = strs;
    if (l <= 1){
        return str;
    }
    let result = '';
    for (let i = 0; i < str.length; i++){
        const c = str[i]
        for (let j = 1; j < l; j++){
            if (strs[j][i] !== c){
                return result;
            }
        }
        result += c;
    }
    return result;
};
