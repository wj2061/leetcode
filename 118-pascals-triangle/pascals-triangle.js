// Given numRows, generate the first numRows of Pascal's triangle.
//
//
// For example, given numRows = 5,
// Return
//
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function pascalRows(numRows) {
    if(numRows < 1){
        return [];
    }else if(numRows === 1){
        return [[1]];
    }
    
    var result = pascalRows(numRows - 1);
    let lastRow = result[result.length-1];
    let newRow = [];
    newRow[0] = 1;
    newRow[numRows-1] = 1;
    
    for (let i = 1; i < Math.floor((numRows+1)/2); i++){
        newRow[i] = lastRow[i-1] + lastRow[i];
        newRow[numRows-1-i] = newRow[i];
    }
    
    result.push(newRow);
    return result;
};
