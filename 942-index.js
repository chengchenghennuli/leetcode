/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let i = -1;
    let l = 0;
    let h = S.length;
    const num = Array( h + 1)
    while(l <= h){
      num[++i] = S[i] === 'I' ? l++ : h--;
  }
    return num;
};
