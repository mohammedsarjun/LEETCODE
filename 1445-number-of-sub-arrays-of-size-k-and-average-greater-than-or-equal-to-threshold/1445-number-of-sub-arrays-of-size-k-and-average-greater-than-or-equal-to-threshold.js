/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let resultCount=0
    let result=0
   for(let i=0;i<k;i++){
    resultCount+=arr[i]
   }

   if((resultCount/k)>=threshold){
    result++
   }

   for(let i=k;i<arr.length;i++){
    resultCount-=arr[i-k]
    resultCount+=arr[i]
    if((resultCount/k)>=threshold){
        result++
    }
   }

   return result
};