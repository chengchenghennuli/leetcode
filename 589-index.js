/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];
    return [root.val, ...root.children.reduce((acc, child) =>      acc.concat(preorder(child)),[])];
};
