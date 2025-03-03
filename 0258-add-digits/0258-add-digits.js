/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
       
        while(String(num).split('').length!=1){
 num= String(num).split('')
        num=num.map((num)=>Number(num))
        num=num.reduce((acc,curr)=>acc+curr,0)
        
        }
       
         
         return num
    
};