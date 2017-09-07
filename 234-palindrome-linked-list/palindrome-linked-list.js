// Given a singly linked list, determine if it is a palindrome.
//
// Follow up:
// Could you do it in O(n) time and O(1) space?


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
var isPalindrome = function(head) {
    
    if(head === null){
        return true;
    }
    
    var slow = head;
    var fast = head;
    while(fast.next !== null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    slow = slow.next;
    
    function reverse(head){
        var pre = null;
        
        while(head !== null){
            var tem = head;
            var next = head.next;
            tem.next = pre;
            pre = tem;
            head = next;  
        }
        
        return pre;
    }
    
    slow = reverse(slow);
    while(slow !== null){
        if(slow.val !== head.val){
            return false;
        }
        slow = slow.next;
        head = head.next;
    }
    
    return true;
    
    
};



