// Write a function that takes a string as input and returns the string reversed.
//
//
// Example:
// Given s = "hello", return "olleh".


/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var result = "";
    for (var i = 0; i < s.length; i++) {
        result = s.charAt(i) + result;
    }
    return result;
};
