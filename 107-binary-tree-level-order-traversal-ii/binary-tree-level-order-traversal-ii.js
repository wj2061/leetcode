// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
//
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
//
//
// return its bottom-up level order traversal as:
//
// [
//   [15,7],
//   [9,20],
//   [3]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var result = [];
    function nodeOfSameLevel(nodeAy){
        let valueAy = [];
        let nextNodeAy = [];
        for(let i = 0; i < nodeAy.length; i++){
            let node = nodeAy[i];
            valueAy.push(node.val);
            if(node.left){
                nextNodeAy.push(node.left);
            }
            if(node.right){
                nextNodeAy.push(node.right);
            }
        }
        
        if(nextNodeAy.length > 0){
            nodeOfSameLevel(nextNodeAy);
        }
        
        result.push(valueAy);
    }
    
    if(root === null){
        return [];
    }
    
    nodeOfSameLevel([root]);
    
    return result;
    
    
};
