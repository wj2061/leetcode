// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
//
// This is case sensitive, for example "Aa" is not considered a palindrome here.
//
// Note:
// Assume the length of given string will not exceed 1,010.
//
//
// Example: 
//
// Input:
// "abccccdd"
//
// Output:
// 7
//
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if( s === null || s.length === 0){
        return 0;
    }
    
    var count = 0;
    const charSet = new Set();
    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i);
        if(charSet.has(char)){
            charSet.delete(char);
            count++;
        }else{
            charSet.add(char);
        }
    }
    count *= 2;
    
    if(charSet.size !== 0){
        count++;
    }
    
    return count;
    
};
