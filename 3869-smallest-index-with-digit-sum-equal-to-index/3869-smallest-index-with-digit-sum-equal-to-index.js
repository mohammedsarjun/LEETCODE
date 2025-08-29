/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(String(nums[i]).length==1 && nums[i]==i) return nums[i] 

        let temp=String(nums[i]).split('').map((num)=>Number(num)).reduce((acc,curr)=>acc+curr,0)
        console.log(temp)
        if(temp==i) return temp
    }
    return -1
};