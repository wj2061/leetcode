// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
//
// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
//
// The order of output does not matter.
//
// Example 1:
//
// Input:
// s: "cbaebabacd" p: "abc"
//
// Output:
// [0, 6]
//
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
//
//
//
// Example 2:
//
// Input:
// s: "abab" p: "ab"
//
// Output:
// [0, 1, 2]
//
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length < p.length){
        return [];
    }
    
    var result = [];
    
    var map = new Map();
    
    function isAnagram(){
        var result = true
        map.forEach(value => {
            if(value !== 0){
                result = false;
                return;
            }
        })
        return result;
    }
    
    
    for(let i = 0; i < p.length; i++){
        let char = p.charAt(i);
        let count = map.get(char);
        if(typeof(count) === 'undefined'){
            count = 0;
        }
        count++;
        map.set(char, count);
    }
    
    for(let i = 0; i < p.length; i++){
        let char = s.charAt(i);
        let count = map.get(char);
        if(typeof(count) !== 'undefined'){
            count--;
            map.set(char, count);
        }
    }
    
    if(isAnagram()){
        result.push(0);
    }
    
    for(let i = p.length; i < s.length; i++){
        let char1 = s.charAt(i-p.length);
        let char2 = s.charAt(i);
        
        if(char1 !== char2){
            let count1 = map.get(char1);
            if(typeof(count1) !== 'undefined'){
               count1++;
               map.set(char1, count1);
            }
            
            let count2 = map.get(char2);
            if(typeof(count2) !== 'undefined'){
               count2--;
               map.set(char2, count2);
            }
        }
        
        if(isAnagram()){
            result.push(i-p.length+1);
        }  
    }
    
    return result;
    
};
