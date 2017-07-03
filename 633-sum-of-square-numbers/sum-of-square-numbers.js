// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.
//
//
// Example 1:
//
// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5
//
//
//
//
// Example 2:
//
// Input: 3
// Output: False


/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var i = 0;
    var j = Math.floor(Math.sqrt(c));
    
    while(i<=j){
        var sum = i*i + j*j;
        if(sum === c){
            return true;
        }else if(sum < c){
            i++;
        }else{
            j--;
        }
    }
    
    return false;
    
};
