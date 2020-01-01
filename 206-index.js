/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next){
        return head
    }
    try{
        return reverseList(head.next)
    }finally{
        head.next.next = head
        head.next = null
    }
    
    
};
