/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let result=-Infinity
    num=num.split("")
    for(let i=0;i<num.length;i++){
        console.log(num[i],num[i]==num[i+1]&&num[i]==num[i+2])

        if(num[i]==num[i+1]&&num[i]==num[i+2]&&String(result)[0]<num[i]){
            console.log(num[i])
            result=num.splice(i,3)
            i=i-3
        }
    }
    if(result!=-Infinity){
      return String(result.join(''))
    }else{
        return ""
    }
   
};