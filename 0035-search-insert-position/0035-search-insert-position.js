/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i
        }

        if(target>nums[i-1]&&target<nums[i]){
            return i
        }

    }
    if(nums[nums.length-1]<target) return nums.length
    else return 0
};