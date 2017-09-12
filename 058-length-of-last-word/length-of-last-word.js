// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
//
// For example, 
// Given s = "Hello World",
// return 5.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var endIndex = -1;
    for(let i = s.length-1; i >= 0; i--){
        let char = s.charAt(i);
        if(endIndex === -1){
            if(char !== ' '){
                endIndex = i;
            }
        }else{
            if(char === ' '){
                return endIndex - i;
            } 
        }  
    }
    
    return endIndex + 1;
    
};
