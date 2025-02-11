/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    let res=[]
    for (let i=0;i<nums.length;i++){
        if(i%10==nums[i]){
            res.push(i)
        }
    }
    if(res==""){
        return -1
    }
    console.log( res.sort((a,b)=>a-b)[0])
    return res.sort((a,b)=>a-b)[0]
};