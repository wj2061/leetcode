// Given an index k, return the kth row of the Pascal's triangle.
//
//
// For example, given k = 3,
// Return [1,3,3,1].
//
//
//
// Note:
// Could you optimize your algorithm to use only O(k) extra space?


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    function arrange(k, j){
        if(k <= 0 || k >= j){
            return 1;
        }
        
        if( k > j/2){
            k = j-k;
        }
        
        var m = 1;
        var n = 1;
        
        for(let i = 0; i < k; i++){
            m *= j-i;
            n *= i+1;
        }
        
        return m/n;
    }
    
    var resultAy = [];
    for(let i = 0; i <= rowIndex; i++){
        if(i <= rowIndex - i){
            resultAy[i] = arrange(i, rowIndex);
        }else{
            resultAy[i] = resultAy[rowIndex - i]
        }        
    }
    
    return resultAy;
    
    
    
    
};
