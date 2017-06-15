// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
//
// Example:
//
// n = 15,
//
// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var resultAy = [];
    for (var k = 1; k <= n; k++){
        var result = "";
        if (k%5 === 0) {
            result = "Buzz";
        }
        if(k%3 === 0) {
            result = "Fizz" + result;
        }
        if(result === "") {
            result = k.toString();
        }
        
        resultAy.push(result);
    }
    return resultAy;
};
