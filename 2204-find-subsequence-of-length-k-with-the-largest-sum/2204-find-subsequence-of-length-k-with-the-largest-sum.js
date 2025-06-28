/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    while(true){
        if(nums.length==k) break
        let min=Math.min(...nums)
        nums.splice(nums.lastIndexOf(min),1)
    }

    return nums

};