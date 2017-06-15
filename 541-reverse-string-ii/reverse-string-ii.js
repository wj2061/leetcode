// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
//
//
// Example:
//
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
//
//
//
// Restrictions: 
//
//  The string consists of lower English letters only.
//  Length of the given string and k will in the range [1, 10000]


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    function turnOver(ay, start, end){
        while(start < end){
            let  tem = ay[start];
            ay[start] = ay[end];
            ay[end] = tem;
            start++;
            end--;
        }
    }
    
    if(k <= 0){
        return s;
    }
    
    let charAy = [...s];
    
    let i = 0;
    while(2 * k * i < s.length){
        let start = 2*k*i;
        let end = start + k-1;
        end = Math.min(s.length-1, end);

        turnOver(charAy, start, end);
        
        i++;
    }
    
    return charAy.join('');
};
