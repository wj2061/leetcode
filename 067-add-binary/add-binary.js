// Given two binary strings, return their sum (also a binary string).
//
//
//
// For example,
// a = "11"
// b = "1"
// Return "100".


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var remain = 0;
    var result = "";
    
    let maxLength = Math.max(a.length, b.length);
    for(let i = 0; i < maxLength; i++){
        if(i < a.length){
            let aChar = a.charAt(a.length - 1 - i);
            remain += Number(aChar);
        }
        
        if(i < b.length){
            let bChar = b.charAt(b.length - 1 - i);
            remain += Number(bChar);
        }
        
        result = remain%2 + result;
        remain = remain>>>1;
    }
    
    if(remain > 0){
        result = '1' + result;
    }
    
    return result;
    
    
    
};
