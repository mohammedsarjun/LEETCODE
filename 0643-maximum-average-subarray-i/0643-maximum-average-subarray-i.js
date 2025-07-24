/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max=-Infinity
    let i=0

    while((i+k)<=nums.length){

        let tempMax=0
        for(let j=i;j<i+k;j++){
            tempMax+=nums[j]
        }
       tempMax=tempMax/k

        if(max<tempMax){
            max=tempMax
        }
        i++
    }

    return max
};