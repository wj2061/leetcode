// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
//
// Example:
// Given a = 1 and b = 2, return 3.
//
//
// Credits:Special thanks to @fujiaozhu for adding this problem and creating all test cases.


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0){
        let i = a^b;
        let j = a&b;
        j = j<<1;
        a = i ;
        b = j ;
    }
    return a;
    
};
