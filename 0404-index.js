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
var sumOfLeftLeaves = function(root) {
   /*if (!root) {
    return 0;
  }
  const { left, right } = root;
  if (!left && !right) {
    return this.left ? root.val : 0;
  }
  return sumOfLeftLeaves(left, true) + sumOfLeftLeaves(right, true);
  
  
    if(!root) return 0
        let result = 0
        if(root.left){
            if(!root.left.left && !root.left.right){
                result += root.left.val
            } else{
                result += dfs(root.left)
            }
        }
        result += dfs(root.right)
        return result*/
    
  let sum = 0;
  const levelOrder = (node, isLeft=false) => {
    if (node) {
      if (isLeft && !node.left && !node.right) sum += node.val;
      levelOrder(node.left, true);
      levelOrder(node.right, false);
    }
  }
  levelOrder(root);
  return sum;
}
