// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
//
//
//
//
// Note: You may assume the string contain only lowercase letters.


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = {};
    
    for(let i = 0; i < s.length; i++){
        let char =  s.charAt(i);
        let count = map[char];
        if(typeof count === 'undefined'){
            count = 0;
        }
        count++;
        map[char] = count;
    }
    
    for(let i = 0; i < s.length; i++){
        let char =  s.charAt(i);
        let count = map[char];
        if(count === 1){
            return i;
        }
    }

    
    return -1;
    
};
