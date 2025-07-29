/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {

    let inc=false
    let dec=false
    for(let i=0;i<nums.length;i++){
            if(nums[i]<nums[i+1]) inc=true
            if(nums[i]>nums[i+1]) dec=true

            if(inc&&dec) return false
    }

    return true
};