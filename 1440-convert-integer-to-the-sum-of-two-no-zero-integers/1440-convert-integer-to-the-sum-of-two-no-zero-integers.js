/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let arr=[Math.floor(n/2),Math.floor(n/2)]
    if(arr.reduce((acc,curr)=>acc+curr,0)!=n){
        arr[1]=arr[1]+1
    }

    while(String(arr[0]).includes('0')||String(arr[1]).includes('0')){
        if(String(arr[0]).includes('0')){
        arr[0]=arr[0]-1
        arr[1]=arr[1]+1
    }else if(String(arr[1]).includes('0')){
         arr[0]=arr[0]-1
        arr[1]=arr[1]+1
    }
    }
    
    return arr
};