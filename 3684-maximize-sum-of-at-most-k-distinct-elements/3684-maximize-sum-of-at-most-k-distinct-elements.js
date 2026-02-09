/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    let distinctNums=[...new Set(nums)].sort((a,b)=>b-a)
    return distinctNums.slice(0,k)

};