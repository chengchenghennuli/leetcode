/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    /*if (root === null)
        return true
        return dfs(root.left, root.right)*/
    if (!root){
        return true
    }
    return check(root.left, root.right)
    function check(left, right){
        const nol = !left;
        const nor = !right;
        if( nol && nor){
            return true
        }
        if (nol !== nor || left.val !== right.val){
            return false
        }
        return check(left.left,right.right) && check(left.right, right.left)
    }
};
