/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let arrSet=[...new Set(arr)]
    arrSet.sort((a,b)=>b-a)
    let obj={}

    for(let i=0;i<arrSet.length;i++){
    obj[arrSet[i]]=0
        for(let j=0;j<arr.length;j++){
            if(arrSet[i]==arr[j]){
obj[arrSet[i]]=obj[arrSet[i]]+1
            }
            
        }
        console.log(obj)
        if(arrSet[i]==obj[arrSet[i]]) return arrSet[i]
    }

    return -1
};