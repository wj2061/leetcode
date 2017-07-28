// Given a binary tree, determine if it is height-balanced.
//
//
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


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
var isBalanced = function(root) {
    
    function heightOfNode(node){
        if(node === null){
            return [0, true];
        }
        
        let ay1 = heightOfNode(node.left);
        let ay2 = heightOfNode(node.right);
        
        var balance = false;
        if(ay1[1] && ay2[1] && Math.abs(ay1[0] - ay2[0]) <=  1){
            balance = true;
        }
        
        return [Math.max(ay1[0], ay2[0]) + 1, balance];
    }
    
   

    return heightOfNode(root)[1];
    
    
};
