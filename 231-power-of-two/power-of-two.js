// Given an integer, write a function to determine if it is a power of two.
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    while(n > 1){
        var rest = n%2;
        if(rest !== 0){
            return false;
        }
        
        n = Math.floor(n/2);
    }
    
    return n === 1;
};
