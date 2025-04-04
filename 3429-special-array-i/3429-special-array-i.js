/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if(nums.length==1){
        return true
    }
    let i=0
    while(true){
        if(nums[i]%2==nums[i+1]%2){
            return false
        }
        if(nums[i+1]==undefined){
            return true
        }
        i++
    }
};