/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const map = {}
    return find(root)
    function find (node){
        if (!node){
            return false
        }
        const {val} = node;
        const diff = k - val;
        if (map[diff]){
            return true;
        }
        map [val] = true;
        return find(node.right) | find(node.left);
    }
    
};
