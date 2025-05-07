/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y=String(x).split('').reverse().join('')
    y=Number(y)

    return x==y?true:false
};