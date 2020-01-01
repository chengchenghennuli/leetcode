/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length == 0){
        return null
    }
    var l = inorder.length
    var rootval = postorder[l - 1]
    var rootPos = inorder.indexOf(rootval)
    var leftInorder = inorder.slice(0,rootPos)
    var rightInorder = inorder.slice(rootPos + 1)
    var leftPostorder = postorder.slice(0,leftInorder.length)
    var rightPOstorder = postorder.slice(leftInorder.length, l - 1)
    var root = new TreeNode(rootval)
    root.left = buildTree(leftInorder,leftPostorder)
    root.right = buildTree(rightInorder,rightPOstorder)
    return root
};
