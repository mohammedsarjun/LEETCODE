/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1==s2) return true
    for(let i=0;i<s2.length;i++){
        for(let j=i+1;j<s2.length;j++){
            let tempArr=s2.split('')
            let tempStr=s2[i]
             tempArr[i]=tempArr[j]
             tempArr[j]=tempStr
             if(tempArr.join('')==s1) return true
        }
    }

    return false
};