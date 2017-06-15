// Given an array consists of non-negative integers,  your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
//
// Example 1:
//
// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
//
//
//
// Note:
//
// The length of the given array won't exceed 1000.
// The integers in the given array are in the range of [0, 1000].


/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort((a,b) => {
        return a-b;
    })
    
    var result = 0;
    for(let i = nums.length-1; i >= 2; i--){
        var j = 0; 
        var k = i-1;
        while(j < k){
            if(nums[j] + nums[k] > nums[i]){
                result = result + k - j;
                k--;
            }else{
                j++;
            }
        }
        
        
    }
    return result;
};
