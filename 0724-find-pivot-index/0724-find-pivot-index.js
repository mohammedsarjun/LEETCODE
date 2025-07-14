/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivotIndex=1


    for(let i=0;i<nums.length;i++){
    let left=0
    let right=0
        for(let j=0;j<nums.length;j++){
            if(j==i)continue
            if(j<i){
                left=left+nums[j]
            }else{
                right=right+nums[j]
            }
        }
  
        if(right==left) return i
     }
     return -1
    
};