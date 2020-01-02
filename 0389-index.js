/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let nums = 0;
    for(let i = 0 ; i < s.length; i++) {
        nums -= s.charCodeAt(i);
        nums += t.charCodeAt(i);
    } 
    nums+= t.charCodeAt(s.length);
    return String.fromCharCode(nums);
};
