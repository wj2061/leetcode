// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
//
//
// For example,
// Given nums = [0, 1, 3] return 2.
//
//
//
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums[nums.length] = -1;
    
    let i = 0;
    while(i < nums.length){
        var tem = nums[i];
        if(tem === i || tem === -1){
            i++;
            continue;
        }
        
        nums[i] = nums[tem];
        nums[tem] = tem;
    }
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === -1){
            return i;
        }
    }
};
