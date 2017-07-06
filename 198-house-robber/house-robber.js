// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
//
// Credits:Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var cacheAy = [];
    function maxSumOf(n){
        if(typeof cacheAy[n] !== 'undefined'){
            return cacheAy[n];
        }

        if ( n === 0 ){
            cacheAy[n] = nums[0];
        }else if( n === 1){
            cacheAy[n] = Math.max(nums[0], nums[1]);
        }else {
            cacheAy[n] = Math.max(nums[n] + maxSumOf(n-2), maxSumOf(n-1));
        }
        return cacheAy[n];

    } 
    
    if(nums.length === 0){
        return 0;
    }else {
        return maxSumOf(nums.length-1);
    }
    
};
