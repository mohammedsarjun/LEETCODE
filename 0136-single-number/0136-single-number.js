/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    console.log(nums)
    let i=0
    while(true){
        if(nums[i]!=nums[i+1]){
            return nums[i]
        }

        nums=nums.filter((num)=>num!=nums[i])
    
    }
};