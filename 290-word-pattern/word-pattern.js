// Given a pattern and a string str, find if str follows the same pattern.
//  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Examples:
//
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
//
//
//
//
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
//
//
// Credits:Special thanks to @minglotus6 for adding this problem and creating all test cases.


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let ay = str.split(' ');
    if(ay.length !== pattern.length){
        return false;
    }
    
    let dict = {};
    let dict2 = {};

    for(let i = 0; i < pattern.length; i++){
        let char = pattern.charAt(i);
        let st = ay[i];
        
        if(typeof(dict[char]) === 'undefined' && typeof(dict2[st]) === 'undefined'){
            dict[char] = st;
            dict2[st] = char
        }else if(dict[char] !== st || dict2[st] !== char){
            return false;
        }
        
    }
    return true;
};
