/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let max = 0;
    const map = {};
    dfs(root);
    const ans = [];
    for (const [num, val] of Object.entries(map)) {
    if (val === max) {
      ans.push(Number(num));
    }
  }
    return ans;
    function dfs(node) {
    if (!node) {
      return;
    }
    const { val, right, left } = node;
    map[val] = ++map[val] || 1;
    max = Math.max(max, map[val]);
    dfs(left);
    dfs(right);
  }
};
