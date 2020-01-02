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
var sumRootToLeaf = function(root) {
    return dfs (root, 0)
    function dfs(node, bit){
        if (!node){
            return 0;
        }
        const {val, left, right} = node;
        bit  = bit * 2 + val;
        return  left == right ? bit : dfs (left, bit) + dfs (right, bit)
    }
};
