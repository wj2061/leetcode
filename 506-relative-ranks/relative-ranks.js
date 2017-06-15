// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
//
// Example 1:
//
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". For the left two athletes, you just need to output their relative ranks according to their scores.
//
//
//
// Note:
//
// N is a positive integer and won't exceed 10,000.
// All the scores of athletes are guaranteed to be unique.


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = [nums[i], i];
    }
    
    nums.sort((a, b) => {
        return b[0] - a[0];
    });
    
    var result = [];
    for(let i = 0; i<nums.length; i++){
        let index = nums[i][1];
        let rank = "";
        if(i === 0){
            rank = "Gold Medal";
        }else if(i ===1){
            rank = "Silver Medal";
        }else if(i ===2){
            rank = "Bronze Medal";
        }else{
            rank = (i+1).toString();
        }
        result[index] = rank;
    }
    
    return result;
    
};
