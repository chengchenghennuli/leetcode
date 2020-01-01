/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    dfs(root, 0)
    return root;
    function dfs(node, sum) {
    if (!node) {
    return sum;
  }
    node.val += dfs(node.right, sum);
    return dfs(node.left, node.val);
  }
};
