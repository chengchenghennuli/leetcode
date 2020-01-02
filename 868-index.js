/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    binaryN = N.toString(2);
    let distance = 0, pre = 0; 
        for (let i in binaryN){
        if (binaryN[i]==1){
            distance = Math.max(distance,i - pre);
            pre = i;
       }
        }
        return distance;
};
