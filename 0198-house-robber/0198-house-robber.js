/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
let prev1=0
let prev2=0
for(let i=0;i<nums.length;i++){
    
    let current=Math.max(prev2,prev1+nums[i])
    prev1=prev2
    prev2=current
}
return prev2
};