/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0
    let left=Math.floor(s.length/2)
    let right=Math.floor(s.length/2)
    for(let i=0;i<s.length;i++){
        if(s[i]=="L")left--
        if(s[i]=="R")right--

        if(left==right){
            count++
        }
    }

    return count
};