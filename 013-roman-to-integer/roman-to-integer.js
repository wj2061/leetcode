// Given a roman numeral, convert it to an integer.
//
// Input is guaranteed to be within the range from 1 to 3999.


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {"I": 1,
               "V": 5,
               "X": 10,
               "L": 50,
               "C": 100,
               "D": 500,
               "M": 1000,
    }
    
    if(s.length <= 0){
        return 0;
    }
    
    var result = map[s.charAt(0)];
    for(let i = 1; i < s.length; i++){
        result += map[s.charAt(i)];
        if(map[s.charAt(i-1)] < map[s.charAt(i)]){
            result = result - map[s.charAt(i-1)] * 2;
            
        }
    }
    return result;
    
    
    
    
};
