// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).
// Each LED represents a zero or one, with the least significant bit on the right.
//
// For example, the above binary watch reads "3:25".
//
// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.
//
// Example:
// Input: n = 1Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
//
//
// Note:
//
// The order of output does not matter.
// The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
// The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".


/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if(num < 0 || num > 10){
        return [];
    }
    
    const hourAy = [1, 2, 4, 8];
    const minAy = [1, 2, 4, 8, 16, 32];
    
    
    function combin(ay){
       const result = [];
       for (let i = 0 ; i < Math.pow(2, ay.length); i++){
           let sum = 0;
           let count = 0;
           for(let j = 0; j < ay.length; j++){
               if(i & (1<<j)){
                   sum += ay[j];
                   count++;
               }
           }
           var ayAtIndex = result[count];
           if(typeof ayAtIndex === 'undefined'){
               ayAtIndex = [];
           }
           ayAtIndex.push(sum);
           result[count] = ayAtIndex;
       }
       return result;

    }
    
    const hourComputeAy = combin(hourAy);
    const minComputeAy = combin(minAy);

    var result = [];
    
    for (let i = 0; i <= num && i <= 4; i++){
        let j = num - i;
        if(j > 6){
            continue;
        }
        
        let hourResult = hourComputeAy[i];
        let minResult = minComputeAy[j];
        
        for (let m = 0; m < hourResult.length; m++){
            if(hourResult[m] > 11){
                continue;
            }
            
            for(let n = 0; n < minResult.length; n++){
                if(minResult[n] > 59){
                    continue;
                }
                let minSt = minResult[n].toString();
                if (minSt.length < 2){
                    minSt = "0" + minSt;
                }
                let st = hourResult[m].toString() + ":" + minSt;
                result.push(st);
                
            }
            
            
        }
        
        
    }
    
    
    return result;
    
    
   
    
    
    
};
