/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    if (root === null) return []
    let queue = [root];
    while (queue.length !==0){
        let len = queue.length;
        let sub = [];
        for (let i = 0; i < len; i++){
            let entry = queue.shift();
            sub.push(entry.val);
            queue.push(...entry.children)
        }
        res.push(sub)
    }
    return res
};
