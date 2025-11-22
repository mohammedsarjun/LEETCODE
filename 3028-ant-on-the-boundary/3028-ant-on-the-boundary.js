/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
let result=0
let count=0
    for(let i=0;i<nums.length;i++){
        result+=nums[i]
        if(result==0) {
            result=0
            count++
         }
    }
return count
};