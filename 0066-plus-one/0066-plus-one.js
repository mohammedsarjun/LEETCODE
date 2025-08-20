/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   for(let i=digits.length-1;i>=0;i--){
    let value=digits[i]
    if(value+1<10){
        digits[i]=value+1
          return digits
    }else{
        digits[i]=0
        if(!digits[i-1]){
            digits.unshift(1)
                return digits
        } 
    }
   }
 
};