/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   let max=Math.max(...nums)
   let num1 =nums.splice(nums.indexOf(max),1)
   max=Math.max(...nums)
   num2=nums.splice(nums.indexOf(max),1)
   console.log(num1,num2)

   return (num1-1)*(num2-1)

};