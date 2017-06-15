// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
//
//
// Example 1:
//
// Given tree s:
//
//      3
//     / \
//    4   5
//   / \
//  1   2
//
// Given tree t:
//
//    4 
//   / \
//  1   2
//
// Return true, because t has the same structure and node values with a subtree of s.
//
//
// Example 2:
//
// Given tree s:
//
//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
//
// Given tree t:
//
//    4
//   / \
//  1   2
//
// Return false.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    
    function treeEqual(a, b){
        if( a === null && b === null){
            return true;
        }
        
        if( a === null || b === null){
            return false;
        }
        
        return a.val === b.val && treeEqual(a.left, b.left) && treeEqual(a.right, b.right);
    }
    
    if(treeEqual(s, t)){
        return true;
    }else if(s.left !== null && isSubtree(s.left, t)){
        return true;
    }else if(s.right !== null && isSubtree(s.right, t)){
        return true;
    }
    
    return false;
    
};
