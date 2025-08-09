/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
   let max=[0,-Infinity]

   for(let i=0;i<mat.length;i++){
    let oneTemp=0
    for(let j=0;j<mat[i].length;j++){
        if(mat[i][j]==1){
            oneTemp++
        }
    }
    if(max[1]<oneTemp){
        max[1]=oneTemp
        max[0]=i
    }

   }

   return max 
};