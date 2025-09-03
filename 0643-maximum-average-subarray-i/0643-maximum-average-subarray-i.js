/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum=-Infinity
    let tempSum=0
    for(let i=0;i<k;i++){
        tempSum+=nums[i]
    }


        maxSum=tempSum
    
    for(let i=k;i<nums.length;i++){
        tempSum-=nums[i-k]
        tempSum+=nums[i]

        if(tempSum>maxSum){
            maxSum=tempSum
        }
    }

    return maxSum/k
};