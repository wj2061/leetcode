// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
//
// You may assume the integer do not contain any leading zero, except the number 0 itself.
//
// The digits are stored such that the most significant digit is at the head of the list.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var plus = 1;
    var i = digits.length - 1;
    
    while(plus === 1 && i >= 0){
        let sum = digits[i] + plus;
        plus = Math.floor(sum/10);
        digits[i]  = sum%10;
        
        i--;
    }
    
    if(plus !== 0){
        digits.unshift(1);
    }
    
    return digits;

    
    
};
