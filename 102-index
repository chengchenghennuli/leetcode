/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
      const  result= []
      dfs(root, 0)
      return result;
      function dfs(node,depth){
         if (!node){
         return;
         }
         const {val,left,right,} =node;
         result[depth] =result[depth] ||[];
         result[depth++].push(val)
         dfs(left, depth)
         dfs(right, depth)
  }
};
