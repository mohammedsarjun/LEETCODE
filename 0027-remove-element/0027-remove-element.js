/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums.splice(i,1)
            i--
        }
    }
    console.log(nums)
    // return nums.length
};