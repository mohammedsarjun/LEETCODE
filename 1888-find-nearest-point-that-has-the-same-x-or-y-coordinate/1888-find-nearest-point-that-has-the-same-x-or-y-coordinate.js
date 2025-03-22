/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
let resArr=[]
let smallestIndex=-1
    for(let i=0;i<points.length;i++){
        if(points[i][0]==x||points[i][1]==y){
           
 let xVal=0
 let yVal=0
            if(x>points[i][0]){
  xVal=x-points[i][0]
            }else{
  xVal=points[i][0]-x
            }
            console.log(y,points[i][0] ,"hello")
            if(y>points[i][1]){
                console.log("punad")
            yVal=y-points[i][1]
            }else{
                      yVal=points[i][1]-y
            }
            
            let minValue=Math.min(...resArr)

console.log(xVal,yVal,"dummy pumda")
            if(minValue>(xVal+yVal)&&(xVal+yVal)>=0){
                smallestIndex=i
                   console.log(smallestIndex)
            }
      console.log(xVal,yVal)
  resArr.push(xVal+yVal)
            
          
        }
        console.log(resArr)
    }


return smallestIndex
 

};