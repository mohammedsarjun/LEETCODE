
var frequencySort = function(s) {
    s.split('')
    let uniquS=new Set(s)
    let uniqueS=Array.from(uniquS)
    let rObj={}
    let result=[];
    for(let i=0;i<uniqueS.length;i++){
        let count=0
        for(let j=0;j<s.length;j++){
        if(uniqueS[i]==s[j]){
            const key=uniqueS[i]
            count=count+1
            rObj[key]=count
            }
        }
        count=0
    }

   const sortedArray = Object.entries(rObj)
  .sort((a, b) => b[1] - a[1]); 
    const sortedObj = Object.fromEntries(sortedArray);
    console.log(sortedObj)

    for(let i=0;i<sortedArray.length;i++){
        for(let j=0;j<sortedArray[i][1];j++){
            result.push(sortedArray[i][0])
        }
    }
    return result.join('')

};

console.log(frequencySort('tree'));