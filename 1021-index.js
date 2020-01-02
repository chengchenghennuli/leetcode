/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let result = '';
    let count = 0;
    for (const c of S){
        if (c =='('){
            if (count++ == 0){
                continue;
            }
        }else if(--count == 0){
            continue;
        }
        result += c    
        }
    return result
};
