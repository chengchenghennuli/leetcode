/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let i = 0;
    let pre = []
    while( i < rowIndex + 1){
    let later = []    
    for (let j = 0; j < i + 1; j++){
        if (j == 0 || j == i){
            later[j] = 1;
        }else{
            later[j] = pre[j] + pre[j - 1]
        }
    }
    pre = later;
    i++;
  }
    return pre;
};
