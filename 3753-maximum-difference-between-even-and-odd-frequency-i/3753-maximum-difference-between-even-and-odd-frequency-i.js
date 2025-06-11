/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
s=s.split('')

    let setS=[...new Set(s)]
    let obj={}
    console.log(s)
    for(let i=0;i<setS.length;i++){
        obj[setS[i]]=s.filter((alp)=>alp==setS[i]).length
    }
    let result=Object.values(obj).sort((a,b)=>b-a)
    let odd=Math.max(...result.filter((num)=>num%2!=0))
    let even=Math.min(...result.filter((num)=>num%2==0))
       return odd-even

};