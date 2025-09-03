/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let largest=[-Infinity,-1]
    let largestArea=-1
    for(let i=0;i<dimensions.length;i++){
        let temp=Math.sqrt(((dimensions[i][0]*dimensions[i][0])+(dimensions[i][1]*dimensions[i][1])))
        let area=dimensions[i][0]*dimensions[i][1]
        if(largest[0]<temp||(largest[0]==temp&&largestArea<area)){
            largest[0]=temp
            largest[1]=i
            largestArea=area
        }
    }

    console.log(largest,dimensions[99])
  
    return dimensions[largest[1]][0]*dimensions[largest[1]][1]
};