/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let n=candyType.length/2
    let result=0
    let mySet=new Set([...candyType])
    mySet=[...mySet]
for(let i=0;i<n;i++){

    if(mySet[i]!=undefined){
        
        result=result+1
    }
}
   return result
    
};