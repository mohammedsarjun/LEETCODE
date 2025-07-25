/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
let tribo=[0,1,1]
if(tribo.length>n){
    if(n==0) return 0
    if(n==1) return 1
    if(n==2) return 1
}
    while(tribo.length<n){
        tribo.push(tribo[tribo.length-1]+tribo[tribo.length-2]+tribo[tribo.length-3])
    }


   return tribo[tribo.length-1]+tribo[tribo.length-2]+tribo[tribo.length-3]
};