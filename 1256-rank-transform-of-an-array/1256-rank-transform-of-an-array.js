/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let orgArr=structuredClone(arr)
    arr.sort((a,b)=>a-b)

   let setArr=new Set(arr)
   setArr=[...setArr]
    let obj={}
    for(let i=0;i<setArr.length;i++){
        obj[setArr[i]]=i+1
    }

    for(let i=0;i<orgArr.length;i++){
        orgArr[i]=obj[orgArr[i]]
    }
    return orgArr
};