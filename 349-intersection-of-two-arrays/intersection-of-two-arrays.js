// Given two arrays, write a function to compute their intersection.
//
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
//
//
// Note:
//
// Each element in the result must be unique.
// The result can be in any order.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var set1 = new Set(nums1);
    var set2 = new Set();
    
    for (let i = 0; i< nums2.length; i++){
        if(set1.has(nums2[i])){
            set2.add(nums2[i]);
        }
    }
    
    return Array.from(set2);
    
    
};
