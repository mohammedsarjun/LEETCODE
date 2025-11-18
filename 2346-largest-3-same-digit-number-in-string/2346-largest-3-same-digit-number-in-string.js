/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let lastRes=[]
    for(let i=0;i<num.length;i++){
        let isBreak=false
        for(let j=i+1;j<=i+2;j++){
            if(num[i]!=num[j]) isBreak=true
        }

        if(!isBreak) {
            lastRes.push([num[i],num[i],num[i]].join(''))
            }
    }

    return lastRes.length?lastRes.sort((a,b)=>b-a)[0]:""

};