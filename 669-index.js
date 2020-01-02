/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) {
  return null;
  }
  const { val, left, right } = root;
  const tl = trimBST(left, L, R);
  const tr = trimBST(right, L, R);
  if (val < L || val > R) {
    return tl || tr;
  }
  root.left = tl;
  root.right = tr;
  return root;
};
