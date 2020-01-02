/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const l = s.length;
    const stack = [-1]
    let max = 0
    for (let i = 0; i < l; i++){
        const c= s[i]
        if (c ==='('){
            stack.push(i)
            continue;
        }
        stack.pop()
        if(!stack.length){
            stack.push(i)
        }else{
            max = Math.max(max, i - stack[stack.length - 1] )
        }
    }
    return max;
};
