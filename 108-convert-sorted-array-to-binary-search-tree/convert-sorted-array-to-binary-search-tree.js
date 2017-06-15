// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length <= 0){
        return null;
    }
    
    let nodeAy = nums.map(num => {
        return new TreeNode(num);
    })
    
    function buildTree(start, end){
        if(start > end){
            return null;
        }else if(start === end){
            return nodeAy[start - 1];
        }

        let index =  start + Math.ceil((end - start + 1)/2) -1;

        let node = nodeAy[index-1];
        node.left = buildTree(start, index-1);
        node.right = buildTree(index+1, end);
        
        return node;
    }
    
    return buildTree(1, nodeAy.length);


};
