// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
//
// Example:
//
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]
//
// Answer: 16
// Explanation: The perimeter is the 16 yellow stripes in the image below:


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var result = 0;
    for(var i = 0; i < grid.length; i++){
        const row = grid[i];
        for(var j = 0; j < row.length; j++){
            if(row[j] === 1){
                result = result + 4;
                if(j < row.length -1 && row[j+1] === 1 ){
                    result = result -2;
                }
                if(i < grid.length-1 && grid[i+1][j] === 1){
                    result = result -2;
                }
            
            }
        }
        
    }
    return result;
};
