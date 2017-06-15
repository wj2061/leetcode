// Find the sum of all left leaves in a given binary tree.
//
// Example:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    var result = 0;
    function searchLeaves(root){
        if(root === null){
            return;
        }
        
        if(root.left !== null && root.left.right === null && root.left.left === null){
            result += root.left.val;
        }
        
        searchLeaves(root.left);
        searchLeaves(root.right);
    }
    
    searchLeaves(root);
    
    return result;
    
    
};
