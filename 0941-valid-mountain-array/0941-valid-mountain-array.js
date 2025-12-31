/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let max=Math.max(...arr)
    if(arr[0]==max)return false
    if(arr[arr.length-1]==max) return false

    let isRising=true
    let isMaxFound=false
    for(let i=1;i<arr.length;i++){
        if(arr[i]==max&&!isMaxFound){
            isRising=false
            isMaxFound=true
            continue
        }

        if((arr[i-1]>arr[i] && isRising)||arr[i-1]==arr[i]) return false

        if((arr[i-1]<arr[i] && !isRising)||arr[i-1]==arr[i]) return false
    }

    return true
};