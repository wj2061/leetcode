// Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
//
// Please note that the string does not contain any non-printable characters.
//
// Example:
//
// Input: "Hello, my name is John"
// Output: 5


/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let k = s.split(" ");
    
    k = k.filter(word => {
        if(word === ""){
            return false;
        }
        return true;
    })
    return k.length
};
