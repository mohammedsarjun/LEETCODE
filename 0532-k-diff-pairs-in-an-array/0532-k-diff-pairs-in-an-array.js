/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
   let sortedNum=nums.sort((a,b)=>a-b)
   let multiArr=[]
   for(let i=0;i<sortedNum.length;i++){
       for(let j=i+1;j<sortedNum.length;j++){
           if(sortedNum[i]+k==sortedNum[j]){
               if(!multiArr.includes(`${sortedNum[i]},${sortedNum[j]}`)){
                  multiArr.push(`${sortedNum[i]},${sortedNum[j]}`)  
               }
           }
           
       }
   }
return multiArr.length
};