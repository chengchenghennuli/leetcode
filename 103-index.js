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
var zigzagLevelOrder = function(root) {
    if(root == null) return [];
    var res=[];
    var dfs=function(node, level){
        if(node == null) return;
        if(res[level] == undefined){
            res[level]=[];
        }
        if(level % 2 == 0){
            res[level].push(node.val);
        }else{
            res[level].unshift(node.val);
        }
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root, 0);
    return res;
};
