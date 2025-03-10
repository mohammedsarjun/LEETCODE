/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j=0
    let count=0
   
    for(let i=0;i<s.length;i++){
         let isBreak=false
        while(j<t.length){
            console.log(j)
            
            if(s[i]==t[j]){
                count++
                isBreak=true
             
            }
            j++
            if(isBreak){
                break
            }
           
        }
    }
    console.log(count)
 if(count==s.length){
    return true
 }
 else{
    return false
 }
};