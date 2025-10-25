/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let obj={}

 for(let i=0;i<arr1.length;i++){
    if(!obj[arr1[i]])obj[arr1[i]] = 0

    obj[arr1[i]]++
 }

let res=[]

 for(let i=0;i<arr2.length;i++){
    let tempLength=obj[arr2[i]]

    for(let j=0;j<tempLength;j++){
        res.push(arr2[i])
    }

 }
let tempRes=[]
 for(let i=0;i<arr1.length;i++){
    if(!res.includes(arr1[i])){
        tempRes.push(arr1[i])
    }
 }

tempRes=tempRes.sort((a,b)=>a-b)


 return [...res,...tempRes]
};