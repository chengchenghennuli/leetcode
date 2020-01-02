/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(row =>{
        return row.reverse().map(i =>{
            return i == 0 ? 1 :0
        })
    })
};
