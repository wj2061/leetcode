// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below. 
//
//
//
//
//
//
//
// Example 1:
//
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
//
//
//
// Note:
//
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u','i', 'o', 'p']);
    const row2 = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);
    const row3 = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm']);
    
    let resultAy = words.filter( word => {
       const wordSet = new Set(word.toLowerCase().split(''));
       
       if (new Set([...row1, ...wordSet]).size == row1.size || new Set([...row2, ...wordSet]).size == row2.size || new Set([...row3, ...wordSet]).size == row3.size){
           return true;
       }
       return false;
    });
    
    return resultAy;
};
