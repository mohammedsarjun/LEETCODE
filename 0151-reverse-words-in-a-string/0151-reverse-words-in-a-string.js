/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res=""
    let word=""
    for(let i=0;i<s.length;i++){
        if(s[i]==" "){
            if(word!=""){
                res=`${word} ${res}`
            }
           word=""
        continue
        }

        word+=s[i]

        if(i==s.length-1){
               res=`${word} ${res}`
        }

    }

   return res.trim()
};