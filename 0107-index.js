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
var levelOrderBottom = function(root) {
    const result = []
    if (!root){
        return result;
    }
    let level = -1;
    let list = [root]
    while (list.length){
        result[++level] = []
        const queue = []
        for (const node of list){
            if (!node){
                continue;
            }
            const {val, left, right} = node;
            result[level].push(val);
            left && queue.push(left);
            right && queue.push(right);
        }
        list = queue;
    }
    return result.reverse();
};
