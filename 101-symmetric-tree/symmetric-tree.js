// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//
//
//
// But the following [1,2,2,null,3,null,3]  is not:
//
//     1
//    / \
//   2   2
//    \   \
//    3    3
//
//
//
//
// Note:
// Bonus points if you could solve it both recursively and iteratively.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    function reverseEqual(left, right){
        if(left === null && right === null){
            return true;
        }else if(left === null || right === null){
            return false;
        }
        
        return reverseEqual(left.left, right.right)  
               && reverseEqual(left.right, right.left) 
               && left.val === right.val;
    }
 
    if(root === null){
        return true;
    }
    
    return reverseEqual(root.left, root.right);
    
    
    
};
