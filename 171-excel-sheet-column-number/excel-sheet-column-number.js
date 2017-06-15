// Related to question Excel Sheet Column Title
// Given a column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//     A -&gt; 1
//     B -&gt; 2
//     C -&gt; 3
//     ...
//     Z -&gt; 26
//     AA -&gt; 27
//     AB -&gt; 28 
//
// Credits:Special thanks to @ts for adding this problem and creating all test cases.


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    const baseCharcode = 'A'.charCodeAt(0) - 1;
    
    for(let i = 0 ; i < s.length; i++){
        let charCode = s.charCodeAt(i) - baseCharcode;
        result = result*26 + charCode;
    }
    
    
    
    return result;
    
};
