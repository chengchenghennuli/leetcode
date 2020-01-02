/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let [prev] = A
    for (let i = 1; i < A.length; i++){
        const n = A[i]
        if (n < prev){
            return  i - 1
        }
        prev = n;
    }
    return - 1;
};
