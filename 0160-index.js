/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    /*let a = headA;
    let b = headB;
    while (a !== b){
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;*/
    const set = new Set();
    while (headA){
        set.add(headA);
        headA = headA.next;
    }
    while (headB){
        if (set.has(headB)){
            return headB;
        }
        headB = headB.next;
    }
    return null;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;
    while (a !== b){
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
};
