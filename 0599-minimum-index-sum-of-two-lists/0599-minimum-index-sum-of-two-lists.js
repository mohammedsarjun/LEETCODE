/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let myMap=new Map()
   for(let i=0;i<list1.length;i++){

    for(let j=0;j<list2.length;j++){
   
        if(list1[i]==list2[j]){
         
            myMap.set(list1[i],[i,j])
        }
    }
   } 
let lowestValues=[]
let lowestIndex=Infinity
   for(let [keys,values] of myMap){
    values=values.reduce((acc,curr)=>acc+curr,0)
        if(values<lowestIndex){
        lowestIndex=values
        lowestValues.pop()
        lowestValues.push(keys)
    }else if(lowestIndex==values){
        lowestValues.push(keys)
    }
    console.log(keys,values)
   }

   console.log(lowestValues)
   return lowestValues
};