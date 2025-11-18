/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let totalNum=nums.reduce((a,b)=>a+b,0)
    if(totalNum%k==0) return 0
    let op=0
    while(totalNum){
        totalNum--
        op++
        if(totalNum%k==0){
             return op
        }
    }

  return 0
};