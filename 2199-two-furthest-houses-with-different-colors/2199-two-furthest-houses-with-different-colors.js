/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let farDistance=0

    for(let i=0;i<colors.length;i++){
        for(let j=0;j<colors.length;j++){
            if(i==j) continue
            if(colors[i]<colors[j]){
                farDistance=Math.max(farDistance,Math.abs(i-j))
            }
        }
    }

    return farDistance
};