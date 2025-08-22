/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let result=nums.reduce((acc,curr)=>acc*curr)
    return signFunc(result)
};

function signFunc(num){

    if(num<0)return -1
    if(num>0)return 1
    return 0

}