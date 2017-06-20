// Given an integer, write a function to determine if it is a power of three.
//
//
//     Follow up:
//     Could you do it without using any loop / recursion?
//
//
// Credits:Special thanks to @dietpepsi for adding this problem and creating all test cases.


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // while(n > 1){
    //     if(n%3 !== 0){
    //         return false;
    //     }
        
    //     n = Math.floor(n/3);
    // }
    
    // if(n === 1){
    //     return true;
    // }else{
    //     return  false;
    // }
    
    const maxThree = 1162261467;
    
    return (n > 0 && maxThree%n === 0);
    
    
};
