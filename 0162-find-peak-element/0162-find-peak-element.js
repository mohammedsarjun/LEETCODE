/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let mid=Math.floor(nums.length/2)
    
    while(true){
        if(nums[mid]<nums[mid+1]){
            mid++
        }else if(nums[mid]<nums[mid-1]){
            mid--
        }else{
            return mid
        }
    }
};