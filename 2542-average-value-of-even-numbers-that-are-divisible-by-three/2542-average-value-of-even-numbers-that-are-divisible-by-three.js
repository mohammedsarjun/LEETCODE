/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let filteredValue=0
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]%3==0 && nums[i]%2==0){
            filteredValue+=nums[i]
            count++
        }
    }
    if(!filteredValue,!count) return 0
   return Math.floor(filteredValue/count)

};