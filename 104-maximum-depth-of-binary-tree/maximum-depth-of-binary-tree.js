// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


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
var maxDepth = function depthOf(root) {
    if (root === null || root.val === null){
        return 0;
    }
    
    return Math.max(depthOf(root.left)+1, depthOf(root.right)+1);
};
