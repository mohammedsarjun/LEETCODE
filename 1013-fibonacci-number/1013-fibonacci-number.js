/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2) return n
    return fib(n-2) + fib(n-1)
};