/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    
let result=0
    for(let i=0;i<s.length;i++){
        if(i+3>s.length) break
          let obj={}
        for(let j=i;j<i+3;j++){
           if(obj[s[j]]){
            result--
            break
           }else{
            obj[s[j]]=1
           }
        }
        result++
        
        
    }

   return result
};