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
var preorderTraversal = function(root) {
    let result = []
    let dfs = function(node,res){
        if(node){
            res.push(node.val)
            dfs(node.left,res)
            dfs(node.right,res)
        }
    }
    dfs(root,result)
    return result;
};
