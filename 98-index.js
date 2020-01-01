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
function isValidBST (root, cur = {val: undefined}) {
    if (!root){
        return true;
    }
    const {val, left,right} = root;
    if (!isValidBST(right, cur) || cur.val <= val){
        return false;
    }
    cur.val = val;
    return isValidBST(left, cur)
};
