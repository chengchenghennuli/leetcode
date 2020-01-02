/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  const g = [];
  G.forEach(n => (g[n] = true));
  let flag = 0;
  let result = 0;
  while (head) {
    if (g[head.val]) {
      if (!flag) {
        flag = true;
        result++;
      }
    } else {
      flag = false;
    }
    head = head.next;
  }
  return result;
};
