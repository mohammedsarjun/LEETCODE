/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let obj={}
    for(let i=0;i<chars.length;i++){
        obj[chars[i]]=(obj[chars[i]]||0)+1

    }
    let result=0

    for(let i=0;i<words.length;i++){
        let tempObj=structuredClone(obj)
        
        for(let j=0;j<words[i].length;j++){
          
            if(!tempObj[words[i][j]]){
                break
            }else{
                tempObj[words[i][j]]--
            }

            if(j==words[i].length-1){
                result+=words[i].length
            }
        }
    }

   return result
};