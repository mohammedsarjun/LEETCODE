/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj={}

    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=0
        }
            obj[arr[i]]++
        
    }
    let resArr=Object.values(obj)
    let setArr=new Set(resArr)
    setArr=[...setArr]

    return resArr.length==setArr.length?true:false
};