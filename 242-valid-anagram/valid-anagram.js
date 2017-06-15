// Given two strings s and t, write a function to determine if t is an anagram of s. 
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    
    const map = {};
    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i);
        let count = map[char];
        if(typeof count === 'undefined'){
            count = 0;
        }
        count++;
        map[char] = count;
    }
    
    for(let i = 0; i < t.length; i++){
        const char = t.charAt(i);
        let count = map[char];
        if(typeof count === 'undefined' || count <= 0){
            return false;
        }
        count--;
        map[char] = count;
    }
    return true;
    
};
