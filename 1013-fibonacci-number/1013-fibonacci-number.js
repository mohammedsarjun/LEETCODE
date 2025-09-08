/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
let n1=0
let n2=1
let fib=0

for(let i=0;i<n;i++){
    n1=n2
    n2=fib
    fib=n1+n2
}

return fib
};