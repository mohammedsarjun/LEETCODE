/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target=[]

    for(let i=0;i<nums.length;i++){
        moveArr(index[i],target)
        target[index[i]]=nums[i]
    }

    return target
};

function moveArr(targetI,arr){
    for(let i=arr.length;i>targetI;i--){
        let temp=arr[i]
        arr[i]=arr[i-1]
        arr[i-1]=temp
    }
}