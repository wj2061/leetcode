// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.  You may assume the given string consists of lowercase English letters only and its length  will not exceed 10000. 
//
// Example 1:
//
// Input: "abab"
//
// Output: True
//
// Explanation: It's the substring "ab" twice.
//
//
//
// Example 2:
//
// Input: "aba"
//
// Output: False
//
//
//
// Example 3:
//
// Input: "abcabcabcabc"
//
// Output: True
//
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i <= Math.floor(s.length/2); i++){
        if(s.length%i !== 0){
            continue;
        }
        
        let subString = s.substr(0, i);
        let result = "";
        while(result.length < s.length){
            result += subString;
        }
        
        if(result === s){
            return true;
        }  
    }
    
    return false;
    
};
