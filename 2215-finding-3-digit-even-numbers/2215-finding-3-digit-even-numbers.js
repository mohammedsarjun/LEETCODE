/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    resArr=[]

    for(let i=0;i<digits.length;i++){
        for(let j=0;j<digits.length;j++){
            if(j==i){
                continue
            }
            for(let k=0;k<digits.length;k++){
                if(k==j||k==i){
        
                    continue
                }
                if(digits[i]!=0&&(digits[i]*100+digits[j]*10+digits[k])%2==0){
resArr.push(digits[i]*100+digits[j]*10+digits[k])
                }
                
            }
        }
    }
    
   
   
    
   const uniqueNumbers = [...new Set(resArr)];
    return uniqueNumbers.sort((a,b)=>a-b) 
};