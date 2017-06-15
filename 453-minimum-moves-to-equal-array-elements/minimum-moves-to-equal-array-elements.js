// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.
//
// Example:
//
// Input:
// [1,2,3]
//
// Output:
// 3
//
// Explanation:
// Only three moves are needed (remember each move increments two elements):
//
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]


/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min = nums[0];
    for (let i = 1; i < nums.length; i++){
        min = Math.min(min, nums[i]);
    }
    
    var result = nums.reduce( (acc, cur) => {
        return acc + cur - min;
    }, 0);
    
    return result;
};
