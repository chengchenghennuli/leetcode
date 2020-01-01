/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
  const set = new Set();
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head){
        return false
    }
    if (set.has(head)){
        return true
    }
    set.add(head)
    return hasCycle(head.next)
};
