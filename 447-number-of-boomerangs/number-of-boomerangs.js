// Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
//
// Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).
//
// Example:
//
// Input:
// [[0,0],[1,0],[2,0]]
//
// Output:
// 2
//
// Explanation:
// The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]


/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    const map = new Map();
    function distance(point1, point2){
        const dx = point1[0] - point2[0];
        const dy = point1[1] - point2[1];
        
        return dx * dx + dy * dy;
    }
    
    if (points.length < 3){
        return 0;
    }
    
    var result = 0;
    
    let distanceMap = new Map();

    for(let i = 0; i < points.length; i++){
        for (let j = 0; j < points.length; j++){
            if(j === i){
                continue;
            }
            
            
            let dis = distance(points[i], points[j]);
            
            let count = 0;
            
            if(distanceMap.has(dis)){
                count = distanceMap.get(dis);
            }
            
            count++;
            distanceMap.set(dis, count);
        }
        distanceMap.forEach((value) => {
           result += value * (value - 1); 
        });
        distanceMap.clear();

    }
    

    
    return result;
    
    
};
