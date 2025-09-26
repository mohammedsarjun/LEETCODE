/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {

    let obj={}
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=0
        }

        obj[arr[i]]++

        if(obj[arr[i]]>arr.length/4){
            return arr[i]
        }
    }
};