/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    nums.sort((a,b)=>a-b)
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            nums.splice(i,2)
          i--
            count++
        }
    }

    let res=[count,nums.length]
    return res
};