/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let pairs=0
    for(let i=0;i<nums.length;i++){
        for(let j=nums.length-1;j>i;j--){
            if(nums[i]==nums[j]&&(i*j)%k==0){
                pairs=pairs+1
            }
        }
    }
    return pairs
};

    