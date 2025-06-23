/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
let obj={}

for(let i=0;i<word.length;i++){
    if(!obj[word[i]]){
        obj[word[i]]=0
    }

    obj[word[i]]+=1
}
let freq=Object.values(obj)

for(let i=0;i<freq.length;i++){
freq[i]-=1

if(isEqual(freq)){
    return true
}else{
    freq[i]+=1
}
}

return false



};

function isEqual(arr){
    arr=arr.filter((num)=>num!=0)
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr[i+1] && i+1!=arr.length){
            return false
        }
    }

    return true
}