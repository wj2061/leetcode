// Given a binary tree, return all root-to-leaf paths.
//
//
// For example, given the following binary tree:
//
//
//
//    1
//  /   \
// 2     3
//  \
//   5
//
//
//
// All root-to-leaf paths are:
// ["1->2->5", "1->3"]
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    
    function searchNode(previous, node){
        if(node === null){
            return;
        }
        
        if(previous.length === 0){
            previous += node.val;
        }else{
            previous = previous + '->' + node.val;
        }
        
        if(node.left === null && node.right == null){
            result.push(previous);
            return;
        }
        
        
        if (node.left !== null){
            searchNode(previous, node.left)
        }
        if(node.right !== null){
            searchNode(previous, node.right)
        }
    }
    searchNode('', root);
    
    return result;
    
    
    
};
