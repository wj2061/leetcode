// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k <= 0){
        return false;
    }
    
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        let index = map.get(num);
        if(typeof(index) !== 'undefined' && i-index <= k ){
            return true;
            
        }else{
            map.set(num, i);  
        }
    }
    
    return false;
};
