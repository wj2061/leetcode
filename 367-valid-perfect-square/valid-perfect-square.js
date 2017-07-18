// Given a positive integer num, write a function which returns True if num is a perfect square else False.
//
//
// Note: Do not use any built-in library function such as sqrt.
//
//
// Example 1:
//
// Input: 16
// Returns: True
//
//
//
// Example 2:
//
// Input: 14
// Returns: False
//
//
//
// Credits:Special thanks to @elmirap for adding this problem and creating all test cases.


/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var left = 0;
    var right = num;
    while(left < right){
        let mid = Math.floor((right-left + 1)/2) + left; 

        let k = mid*mid;
        if(k === num){
            return true;
        }else if (k > num){
            right = mid-1;
        }else{
            left = mid;
        }
    }
    
    return false;
    
};
