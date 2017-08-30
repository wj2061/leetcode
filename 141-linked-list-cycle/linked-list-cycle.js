// Given a linked list, determine if it has a cycle in it.
//
//
//
// Follow up:
// Can you solve it without using extra space?


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var single = head;
    var double = head;
    while(single !== null && double !== null){
        single = single.next;
        double = double.next;
        if(double !== null){
            double = double.next;
            if(double === single){
                return true;
            }
        }
    }
    return false;
};
