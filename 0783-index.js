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
var minDiffInBST = function(root) {
    /*var arr = []
    inorder (root, arr)
    var minDiff = Number.MAX_VALUE;
    for (var i =0; i < arr.length - 1; i++){
        var temp = arr[i+1] - arr[i]
        minDiff = Math.min(minDiff, temp)
    }
    return minDiff;
    var inorder =function(root, arr){
        if(root == null) return null
        inorder(root.left, arr)
        arr.push(root.val)
        inorder(root.right, arr)
    }*/
    let min = Infinity;
    let prev = -Infinity;
    dfs(root);
    return min;
    function dfs(node){
        if(!node){
            return
        }
        const {left, val, right} =node;
        dfs(left)
        min = Math.min(min, val - prev);
        prev = val;
        dfs(right);
    }
};
