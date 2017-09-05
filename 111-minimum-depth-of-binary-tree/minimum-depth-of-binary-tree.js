// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.


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
var minDepth = function(root) {
    if(root === null){
        return 0;
    }
    
    var stack = [root];
    var result = 1;
    
    while (stack.length > 0){
        var stack1 = [];
        for(let i = 0; i < stack.length; i++){
            let node = stack[i];
            if(node.left === null && node.right == null){
                return result;
            }
            
            if(node.left !== null){
                stack1.push(node.left);
            }
            if(node.right !== null){
                stack1.push(node.right);
            }
        }
        
        stack = stack1;
        result++;
    }  
};
