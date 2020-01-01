/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let t = s.split('')
    for (let i = 0; i < s.length; i += 2 * k){
        let start = i;
        let end = i + k - 1;
        while (start < end){
            const temp = t[start]
            t[start] = t[end];
            t[end] = temp;
            start++;
            end--;
        }
    }
    return t.join('');
};
