/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let freq={"0":0}
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
           let zero= nums.splice(i,1)
            freq[zero]++
            i--
        }
    }
let n=freq["0"]
    for(let i=0;i<n;i++){
        nums.push(0)
    }
};