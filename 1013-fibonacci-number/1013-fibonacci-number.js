/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0) return n
    let result=0
    let arr=[0,1]
   for(let i=2;i<n;i++){
    arr.push(arr[arr.length-1]+arr[arr.length-2])
   } 
  return arr[arr.length-1]+arr[arr.length-2]
};