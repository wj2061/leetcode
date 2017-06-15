// Invert a binary tree.
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
//
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
//
// Trivia:
// This problem was inspired by this original tweet by Max Howell:
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function invert(root) {
    if (root === null){
        return root;
    }
    
    var ay = [root];
    
    while (ay.length > 0){
        var node = ay.pop();
        
        const tem = node.left;
        node.left = node.right;
        node.right = tem;
        
        if(node.left !== null){
            ay.push(node.left);
        }
        
        if(node.right !== null){
            ay.push(node.right);
        }
    }
    
    return root;
};
