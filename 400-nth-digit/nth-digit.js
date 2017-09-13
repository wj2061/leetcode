// Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 
//
// Note:
// n is positive and will fit within the range of a 32-bit signed integer (n < 231).
//
//
// Example 1:
//
// Input:
// 3
//
// Output:
// 3
//
//
//
// Example 2:
//
// Input:
// 11
//
// Output:
// 0
//
// Explanation:
// The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.


/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var sum = 0;
    var k = 1;
    while(sum < n){
        sum += k* Math.pow(10,k-1) * 9;
        k++;
    }
    
    k--;
    
    let max = Math.pow(10, k) - 1;
    let distance = sum - n;
    
    let number = max - Math.floor(distance/k);
    let remain = distance%k;
    
    let st = number.toString();
    
    let result = Number(st.charAt(st.length-1-remain));
    return result;
    
};
