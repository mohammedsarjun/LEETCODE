/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let output=[];
 
    nums.sort((a,b)=>a-b).forEach((x,i)=>{
        if(x==target){
            output.push(i)
        }
    })
    
        return output
    
};