/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    /*const parts = s.split(' ')
    while (parts.length){
        const s = parts.pop()
        const l = s.length
        if (l){
            return l;
        }
    }
    return 0;*/
    s = s.trimRight();
    let l = s.length;
    let result = 0;
    while (l--) {
    const c = s[l];
    if (c === ' ') {
      break;
    }
    result++;
  }
    return result;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const parts = s.split(' ')
    while (parts.length){
        const s = parts.pop()
        const l = s.length
        if (l){
            return l;
        }
    }
    return 0;
};
