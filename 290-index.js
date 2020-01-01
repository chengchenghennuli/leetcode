/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let l = pattern.length;
    const words = str.split(/\s/g)
    if (l !== words.length){
        return false
    }
    const mp = {}
    const mw = {}
    while (l--){
        const p = words[l]
        const w = pattern[l]
        if(mp[p] == undefined && mw[w] == undefined){
            mp[p] = w
            mw[w] = p
            continue;
        }
        if (mp[p] !== w || mw[w] !== p){
            return false;
        }
    }
    return true;
};
