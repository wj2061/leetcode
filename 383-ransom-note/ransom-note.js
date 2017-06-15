// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom 
// note can be constructed from the magazines ; otherwise, it will return false. 
//
//
// Each letter in the magazine string can only be used once in your ransom note.
//
//
// Note:
// You may assume that both strings contain only lowercase letters.
//
//
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var ay = new Array(26);
    ay.fill(0, 0, 25);
    const startCharcode = 'a'.charCodeAt(0);
    
    for(let i = 0; i < magazine.length; i++){
        const index = magazine.charCodeAt(i) - startCharcode;
        ay[index]++;
    }
    
    for(let i = 0; i < ransomNote.length; i++){
        const index = ransomNote.charCodeAt(i) - startCharcode;
        ay[index]--;
        if(ay[index] < 0){
            return false;
        }
    }
    
    return true;

};
