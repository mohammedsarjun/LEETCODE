/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

    let newArr=[nums.filter((num)=>num%2==0)]
   newArr=[...newArr,nums.filter((num)=>num%2!=0)]
  return newArr.flat()
};