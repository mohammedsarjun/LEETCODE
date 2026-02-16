/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
let result=[]

let originalDigitsCount={}

for(let i=0;i<digits.length;i++){
    if(!originalDigitsCount[digits[i]]){
        originalDigitsCount[digits[i]]=0
    }
    originalDigitsCount[digits[i]]++
}
    for(let i=100;i<=999;i++){


        if(i%2!=0) continue

        let duplicationDigitsCount=structuredClone(originalDigitsCount)
        let strDigit=String(i)

 

        

        if(duplicationDigitsCount[Number(strDigit[0])]){
            duplicationDigitsCount[Number(strDigit[0])]--
              if(duplicationDigitsCount[Number(strDigit[1])]){
                 duplicationDigitsCount[Number(strDigit[1])]--
                  if(duplicationDigitsCount[Number(strDigit[2])]){
            result.push(Number(strDigit))
        }

            
        }
        }

    }

   return result
};
