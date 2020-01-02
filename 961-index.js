/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    if(!A) return;
    let hash = [];
    for(let i of A){
        if(hash[i]){
            return i;
        }else{
            hash[i] = true;
        }
    }
    return;
};
