/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let consecutiveodds =0

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            consecutiveodds++
        }else{
            consecutiveodds=0
        }
        if(consecutiveodds==3)return true
    }

    return false
};