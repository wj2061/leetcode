// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
//
//
//
// Example:
// Given a binary tree 
//
//           1
//          / \
//         2   3
//        / \     
//       4   5    
//
//
//
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
//
//
// Note:
// The length of path between two nodes is represented by the number of edges between them.


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
var diameterOfBinaryTree = function(root) {
    var maxLength = 0;
    
    function depthOfBothSide(root){
        if(root === null){
            return [0,0];
        }
        
        let left = 0;
        let right = 0;
        
        if(root.left !== null){
            let leftay = depthOfBothSide(root.left);
            left = Math.max(leftay[0], leftay[1]) +1;
        }
        
        if(root.right !== null){
            let rightay = depthOfBothSide(root.right);
            right = Math.max(rightay[0], rightay[1]) +1;
        }
        
        if(left + right > maxLength){
            maxLength = left + right
        }
        
        return [left, right];
    }
    
    depthOfBothSide(root);
    
    return maxLength;
    
};
