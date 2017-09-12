// Write a function to find the longest common prefix string amongst an array of strings.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    function commonSt(s1, s2){
        let result = '';
        for (let i = 0; i <= s1.length-1 && i <= s2.length-1; i++){
            if(s1.charAt(i) === s2.charAt(i)){
                result += s1.charAt(i);
            }else{
                break;
            }
        }
        return result;
    }
    
    if(strs.length === 0){
        return '';
    }
    
    let result = strs[0];
    for(let i = 1; i < strs.length; i++){
        result = commonSt(result, strs[i]);
    }
    
    return result;
    
};
