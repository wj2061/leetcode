// Given an array of integers where 1 &le; a[i] &le; n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements of [1, n] inclusive that do not appear in this array.
//
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
//
// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [5,6]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums[nums.length] = nums[0];
    var i = 1;
    
    while (i < nums.length){
        if(nums[i] === i || nums[i] === nums[nums[i]] ){
            i++;
        }else{
            var tem = nums[i];
            nums[i] = nums[tem];
            nums[tem] = tem;
        }
    }
    
    var result = [];
    for(var j = 1; j < nums.length; j++){
        if(nums[j] !== j){
            result.push(j);
        }
    }
    
    return result;
    
};
