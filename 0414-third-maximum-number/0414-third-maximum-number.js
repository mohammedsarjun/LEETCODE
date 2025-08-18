/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {


 nums=new Set(nums)
 nums=[...nums]
let firstLargest=-Infinity
let secondLargest=-Infinity
let thirdLargest=-Infinity

for(i=0;i<nums.length;i++){
    if(firstLargest<nums[i]){
        thirdLargest=secondLargest
        secondLargest=firstLargest
        firstLargest=nums[i]
        
    }else if(secondLargest<nums[i]){
         thirdLargest=secondLargest
        secondLargest=nums[i]
    }else if(thirdLargest<nums[i]){
        thirdLargest=nums[i]
    }
}
console.log(secondLargest)
if(thirdLargest==-Infinity){
    return firstLargest
}else if(!secondLargest==-Infinity){
    return firstLargest
}
return thirdLargest
};