/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   /*const l = s.length;
   for (let i = 0; i < 1 / 2 ; i++ ){
       const j = l - i - 1 ;
       [s[i], s[j]] = [s[j], s[i]];
   }*/
    for(let i=0; i<s.length/2; i++){
        [s[i],s[s.length-1-i]] = [s[s.length-1-i],s[i]]
    }
};
