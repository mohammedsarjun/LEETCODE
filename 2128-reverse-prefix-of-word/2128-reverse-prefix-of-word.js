/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let target =word.indexOf(ch)
   
    let revArr=word.split('').splice(0,target+1)
     revArr=revArr.reverse()
    //  console.log(revArr)
    //  if(revArr!=""){
    //     return word
    //  }
    let resultArr=word.split('').splice(target+1,word.length)
    resultArr=[...revArr,...resultArr]
 
    return resultArr.join('')
};