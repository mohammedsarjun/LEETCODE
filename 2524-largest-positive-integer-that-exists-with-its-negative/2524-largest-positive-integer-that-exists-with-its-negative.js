/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums=nums.sort((a,b)=>a-b)
    if(nums[nums.length-1]<0) return -1
    for(let i=0;i<nums.length;i++){

        if(nums[i]>=0) return -1
        if(nums.includes(Math.abs(nums[i]))) return Math.abs(nums[i])
    }
};