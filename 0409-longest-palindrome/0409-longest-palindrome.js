/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    let obj={}

    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]) obj[s[i]]=0
        obj[s[i]]+=1
    }
    let evenSum=Object.values(obj).reduce((acc,curr)=>acc+curr,0)

    let nRun=Object.values(obj).filter((num)=>num%2!=0).length

    for(let i=0;i<nRun-1;i++){
        evenSum--
    }
    return evenSum
};