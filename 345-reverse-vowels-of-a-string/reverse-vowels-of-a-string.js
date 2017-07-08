// Write a function that takes a string as input and reverse only the vowels of a string.
//
//
// Example 1:
// Given s = "hello", return "holle".
//
//
//
// Example 2:
// Given s = "leetcode", return "leotcede".
//
//
//
// Note:
// The vowels does not include the letter "y".


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowelSt ="aeiouAEIOU";
    let charAy = s.split('');
    
    var i = 0;
    var j = s.length-1;
    while(i < j){
        let charLeft = charAy[i];
        if(vowelSt.indexOf(charLeft) === -1){
            i++;
            continue;
        }
        
        let charRight = charAy[j];
        if(vowelSt.indexOf(charRight) === -1){
            j--;
            continue;
        }
        
        charAy[i] = charRight;
        charAy[j] = charLeft;
        
        i++;
        j--;
    }
    
    return charAy.join('');
    
    
};
