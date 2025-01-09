/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let sets=new Set(nums.filter((num)=>num>0).sort((a,b)=>a-b))
    let sortedArray=[...sets]

    
    if(sortedArray.length==0) return 1
    for(let i=0;i<=sortedArray[sortedArray.length-1];i++){
        
        if(i+1!=sortedArray[i]){
            return i+1
        }
        if(i==sortedArray[sortedArray.length-1]){
            return i+1
        }

   
    }
};