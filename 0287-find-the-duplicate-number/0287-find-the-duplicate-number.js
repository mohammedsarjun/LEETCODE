/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let newSet=new Set()
    for(let i=0;i<nums.length;i++){
      
        let newSetSize=newSet.size
        newSet.add(nums[i])
        if(newSet.size!=newSetSize+1){
            return nums[i]
        }

        
    }
};