/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
let resArr=[]

 for(let j=0;grid[0].length!=0;j++){
     tempArr=[]
   for(let i=0;i<grid.length;i++){
    largeNum=Math.max(...grid[i])
    grid[i].splice(grid[i].indexOf(largeNum),1)
    tempArr.push(largeNum)
   }
resArr.push(Math.max(...tempArr))
  
 }
 return resArr.reduce((acc,curr)=>acc+curr)
 }

