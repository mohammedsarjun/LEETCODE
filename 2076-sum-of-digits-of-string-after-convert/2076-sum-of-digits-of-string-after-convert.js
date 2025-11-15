/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let numArr=s.split('').map((alph)=>alph.charCodeAt(0)-96)
    console.log(numArr)
    numArr=numArr.join('')

    for(let i=0;i<k;i++){
        if(!Array.isArray(numArr)) numArr=String(numArr).split('')
        numArr=numArr.reduce((acc,curr)=>Number(acc)+Number(curr),0)
    }

    return numArr
};