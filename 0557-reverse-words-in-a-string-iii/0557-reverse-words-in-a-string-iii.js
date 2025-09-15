/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
 
    return s.split(" ").map((sArr)=>sArr.split('').reverse().join('')).join(' ')   

};