/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let mySet = new Set(nums)
    mySet = [...mySet]
    console.log(mySet)
    let resArr = nums
    let count = 0
    for (let i = 0; i < mySet.length; i++) {
        count = 0
        for (let j = 0; j < nums.length; j++) {
            if( mySet[i]==nums[j]){
                count++
            }
            if(count>1){
                nums=nums.filter((num)=>num!=nums[j])
                break
            }
        }
    }
    return nums.reduce((acc,curr)=>acc+curr,0)
}
//    console.log(resultArr)
//    return resultArr.reduce((acc,curr)=>acc+curr,0)

