/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let min = Infinity;
    dfs(root, -Infinity);
    return min;
    function dfs(node, prev){
        if (!node || min <= 1){
            return prev
        }
        const {val, left, right} = node;
        prev = dfs(left, prev);
        min = Math.min(min, val - prev);
        return dfs (right, val);
    }
};
