// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var result = null;
    var lastNode = null;
    
    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            var node = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            var node = new ListNode(l2.val);
            l2 = l2.next;
        }
        
        if(result === null){
            result = node;
            lastNode = node;
        }else{
            lastNode.next = node;
            lastNode = node;
        }
    }
    
    var restNode ;
    if(l1 !== null || l2 !== null){
        var restNode ;
        if(l1 === null){
            restNode = l2;
        }else{
            restNode = l1;
        }
        
        if(lastNode === null){
            result = restNode; 
        }else{
            lastNode.next = restNode;
        }  
    }
    
    
    
    
    
    return result
};
