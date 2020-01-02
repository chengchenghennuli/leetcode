/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let sign;
    for (let i = 1; i < A.length; i++){
        if (A[i] == A[i - 1]){
            continue;
        }
        const s = Math.sign(A[i] - A[i -1])
        sign = sign || s;
        if (s !== sign){
            return false;
        }
    }
    return true;
};
