/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
let streak=0
let count=0

for(let i=0;i<nums.length;i++){
    if(nums[i]==0){
        streak++
        count+=streak
    }else{
        streak=0
    }
}
return count
};