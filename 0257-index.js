/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
        const paths = []
        dfs (root)
        return paths
        function dfs (node,cur) {
            if (!node){
                return
            }
            const {val, left, right} = node
            cur = cur ? `${cur}->${val}` : `${val}`;
            if (!left && !right){
                return paths.push(cur)
            }
            dfs (left, cur)
            dfs (right, cur)
        } 
};
