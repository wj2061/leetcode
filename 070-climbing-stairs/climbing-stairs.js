// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
//
// Note: Given n will be a positive integer.


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    
    function permutation(x, y){
        if(x > y/2){
            x = y - x;
        }
        if(x === 0){
            return 1;
        }
        
        var sum = 1;
        var denominator = 1;
        var cur = y;
        for (let i = x; i > 0; i--){
            sum = sum * cur;
            denominator = denominator * i;
            
            cur--
        }
        
        return sum/denominator;
    }
    
    
    var i = 0;
    var j = n;
    var result = 0;
    
    while(i <= j){
        result += permutation(i, j);
        i++;
        j--;
    }
    
    return result;
    

}   
   
   

