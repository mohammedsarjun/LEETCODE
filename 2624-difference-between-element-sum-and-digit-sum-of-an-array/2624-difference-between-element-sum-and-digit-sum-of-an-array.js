/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum=nums.reduce((acc,curr)=>acc+curr,0)
    nums=nums.map((num)=>String(num))
    for(let i=0;i<nums.length;i++){
        if(nums[i].length>1){
            nums[i]=nums[i].split('')
        }
    }
   let digitSum=0
   let resNum=nums.flat()
   for(let i=0;i<resNum.length;i++){
    digitSum=digitSum+Number(resNum[i])
   }
   if(elementSum>digitSum){
    return elementSum-digitSum
   }else{
     return digitSum-elementSum
   }
};