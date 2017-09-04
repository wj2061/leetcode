// Given two strings s and t, determine if they are isomorphic.
//
// Two strings are isomorphic if the characters in s can be replaced to get t.
//
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
//
// For example,
// Given "egg", "add", return true.
//
// Given "foo", "bar", return false.
//
// Given "paper", "title", return true.
//
// Note:
// You may assume both s and t have the same length.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false;
    }else if (s === t){
        return true;
    }
    
    let dict1 = {};
    let dict2 = {};
    for(let i = 0; i < s.length; i++){
        let m = s.charAt(i);
        let n = t.charAt(i);
        let k = dict1[m];
        if(typeof(k) === "undefined"){
            dict1[m] = n;
        }else if(k !== n){
            return false;
        }
        
        let j = dict2[n];
        if(typeof(j) === "undefined"){
            dict2[n] = m;
        }else if(j !== m){
            return false;
        }
        
    }
    return  true;
    
    
};
