// Given an integer array, find three numbers whose product is maximum and output the maximum product.
//
// Example 1:
//
// Input: [1,2,3]
// Output: 6
//
//
//
// Example 2:
//
// Input: [1,2,3,4]
// Output: 24
//
//
//
// Note:
//
// The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if (nums.length < 3){
        return null;
    }
    
    nums.sort((a,b) =>{
        return  a - b;
    })
    
    var length = nums.length;
    var max1 = nums[length-1];
    var max2 = Math.max(nums[0]*nums[1], nums[length-2]*nums[length-3]);
    
    return max1*max2;
    
};

