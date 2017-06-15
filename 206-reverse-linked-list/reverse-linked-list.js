// Reverse a singly linked list.
//
// click to show more hints.
//
// Hint:
// A linked list can be reversed either iteratively or recursively. Could you implement both?


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
    if(head === null){
        return null;
    }
    
    var current = head;
    var pre = null;
    var next = current.next;
    
    while(next !== null){
        current.next = pre;
        pre = current;
        current = next;
        next = next.next;
    }
    
    current.next = pre;
    
    return current;
    
    
};
