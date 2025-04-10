/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let newS=[]
    let resCount=0
    for(let i=0;i<s.length;i++){
        newS.push(s[i].toUpperCase())
    }
    for(let i=0;i<newS.length;i++){
        if(newS[i]!=newS[i+1] && i!=newS.length-1){
            resCount++
        }
    }
    return resCount
};