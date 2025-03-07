/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i==j){
                continue
            }
            if(nums[i]==nums[j]){
           
                nums.splice(i,1)
             
                i--
                break
            }
        }
    }
    console.log(nums)
   
};