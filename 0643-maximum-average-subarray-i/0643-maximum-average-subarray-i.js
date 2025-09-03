/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg=-Infinity
    for(let i=0;i<nums.length;i++){
        let j=i
        let tempAvg=0
        if(j+k>nums.length) break
        while(j<i+k){
            tempAvg+=nums[j]
            j++
        }
        tempAvg=tempAvg/k
        if(tempAvg>maxAvg){
            maxAvg=tempAvg
        }
    }

    return maxAvg
};