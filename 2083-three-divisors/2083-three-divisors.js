/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let divCount=0

    for(let i=1;i<=n;i++){
        if(n%i==0) divCount++
    }
    if(divCount==3) return true
    return false
};