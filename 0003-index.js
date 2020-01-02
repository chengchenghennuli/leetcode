/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /*const sum = [];
       let max = 0;
       for (let i =0; i < s.length; i++){
           let index = sum.indexOf(s.charAt(i));
           if (index == -1){
               sum.push(s.charAt(i));
           }
           else{
               sum = sum.slice(indexOf + 1, sum.length);
               sum.push(s.charAt(i))
           }
           max = Math.max(max,sum.length)
       }
       return max*/
    if (s.length <= 1)
        return s.length;
        let max = 1;
        let sum = 0;
        for (let i =1 ; i < s.length; i++){
            let index = s.indexOf(s.charAt(i),sum);
            if (index < i){
                sum = index + 1;
            }
            max =Math.max(max,i-sum+1);
        }
        return max;
};
