// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
//
// Note:
//
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var i = num1.length;
    var j = num2.length;
    
    var hasIncre = false;
    var result ='';
    
    for(let k = 0; k < i || k < j; k++){
        let s1 = k < i ? Number(num1.charAt(i-k-1)) : 0;
        let s2 = k < j ? Number(num2.charAt(j-k-1)) : 0;
        
        let sum = s1 + s2;
        if(hasIncre){
            sum++;
            hasIncre = false;
        }
        
        if(sum >= 10){
            hasIncre = true
            sum = sum - 10;
        }
        
        result = sum.toString() + result;
    }
    
    if(hasIncre){
        result = '1' + result;
    }
    
    return result;
    
};
