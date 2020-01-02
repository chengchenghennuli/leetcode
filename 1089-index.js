/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const queue = []
    for (let i = 0; i < arr.length; i++){
        const n = arr[i]
            if (queue.length > 0){
                arr[i] = queue.shift()
                queue.push(n)
            }
        if (n == 0){
            queue.push(n)
        }
    }
};
