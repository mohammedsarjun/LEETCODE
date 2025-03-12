/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let resArr=[]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i==j){
                continue
            }
            if(nums[i]==nums[j]){
                resArr.push(nums[i])
                break
            }
        }
    }
    let mySet=new Set(resArr)
    resArr=[...mySet]
   return resArr.sort((a,b)=>a-b)
};