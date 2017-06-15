// Given an array of size n, find the majority element. The majority element is the element that appears more than &lfloor; n/2 &rfloor; times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.
//
// Credits:Special thanks to @ts for adding this problem and creating all test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var map = {};
    for (let i = 0; i < nums.length; i++){
        let key = nums[i].toString();
        let count = map[key];
        if(typeof count === 'undefined'){
            count = 0;
        }
        count++;
        if(count > nums.length/2){
            return nums[i];
        }
        
        map[key] = count;
    }
    
};
