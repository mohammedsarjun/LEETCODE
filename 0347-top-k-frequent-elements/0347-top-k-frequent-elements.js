/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
let obj={}
let set= new Set(nums)
set=[...set]

    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=0
        }
        obj[nums[i]]++
    }

    let arr=[]

    for(let i=0;i<set.length;i++){
        arr.push([set[i],obj[set[i]]])
    }

    arr.sort((a,b)=>b[1]-a[1])


    let result=[]

    for(let i=0;i<k;i++){
        result.push(arr[i][0])
    }

    return result
    
};