/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    let result=new Set()
    let obj={}

    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1
        }else{
            result.add(nums[i])
        }
    }

    result=[...result]

    return result
};