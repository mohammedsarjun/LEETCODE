/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let oneDif=Math.abs(x-z)
    let twoDif=Math.abs(y-z)
    console.log(oneDif,twoDif)

    if(oneDif==twoDif) return 0 

    return oneDif>twoDif?2:1
};