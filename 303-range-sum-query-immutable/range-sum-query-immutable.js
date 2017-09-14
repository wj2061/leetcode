// Given an integer array nums, find the sum of the elements between indices i and j (i &le; j), inclusive.
//
// Example:
//
// Given nums = [-2, 0, 3, -5, 2, -1]
//
// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
//
//
//
// Note:
//
// You may assume that the array does not change.
// There are many calls to sumRange function.


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    
    let sumAy =[];
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        sumAy.push(sum);
    }
    this.sumAy = sumAy;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sumAy[j] - this.sumAy[i] + this.nums[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
