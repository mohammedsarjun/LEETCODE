/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
let resArr=[]
resArr.push(nums.indexOf(target))
resArr.push(nums.lastIndexOf(target))
if(resArr==""){
    return[-1,-1]
}
else{
    return resArr
}
};