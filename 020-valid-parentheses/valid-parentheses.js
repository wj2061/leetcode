// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2 !== 0){
        return false;
    }
    
    let ay = new Array(3).fill(0);
    var right = '';
    
    for(let i = 0; i < s.length; i++){
        let char = s.charAt(i);
        
        switch (char) {
            case '(':
                right = ')' + right;
                break;
            case '{':
                right = '}' + right;
                break;
            case '[':
                right = ']' + right;
                break;
            case ')':
            case '}':
            case ']':
                if( char === right.charAt(0)){
                    right = right.substr(1);
                }else{
                    return false;
                }
                break;
        }
        
    }
    
    return right.length === 0;
    
};
