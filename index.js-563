563. Binary Tree Tilt
Given a binary tree, return the tilt of the whole tree.
The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.
The tilt of the whole tree is defined as the sum of all nodes' tilt.
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
var findTilt = function(root) {
    let sum = 0;
    dfs(root)
    return sum;
    function dfs(node){
        if (!node){
            return 0;
        }
        const {val, left, right} = node;
        const l = dfs(left)
        const r = dfs(right)
        sum += Math.abs(l - r)
        return val + l + r;
    }
};
