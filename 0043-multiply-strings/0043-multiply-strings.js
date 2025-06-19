/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let num1Arr=[]
    for(let i=0;i<num1.length;i++){
        num1Arr[i]=[]
        for(let j=0;j<num1[i];j++){
               num1Arr[i].push(0)
        }
     
    }
    let num2Arr=[]
    for(let i=0;i<num2.length;i++){
        num2Arr[i]=[]
        for(let j=0;j<num2[i];j++){
               num2Arr[i].push(0)
        }
     
    }

    let res1=""

        for(let i=0;i<num1Arr.length;i++){
          
            res1+=num1Arr[i].length
     
    }

    let res2=""
       for(let i=0;i<num2Arr.length;i++){
            res2+=num2Arr[i].length
    }

    return String(BigInt(res1) * BigInt(res2));
};