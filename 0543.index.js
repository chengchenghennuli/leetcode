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
var diameterOfBinaryTree = function(root) {
    let max = 0;
    dfs(root)
    return max;
    function dfs(node){
        if (!node){
            return 0
        }
        const dl = dfs(node.left)
        const dr = dfs(node.right)
        max = Math.max(max, dl + dr)
        return 1 + Math.max (dl, dr);
    }
};
