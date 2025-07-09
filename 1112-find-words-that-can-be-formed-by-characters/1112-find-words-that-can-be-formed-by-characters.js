/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    chars=chars.split('')
    let count=0
    let cloneChar=structuredClone(chars)
    for(let i=0;i<words.length;i++){
        let tempCount=0

        for(let j=0;j<words[i].length;j++){
            if(chars.includes(words[i][j])){
         
                tempCount++
                chars.splice(chars.indexOf(words[i][j]),1)
                
            }else{
                tempCount=0
                break
            }
        }
        count+=tempCount
        chars=[...cloneChar]
    }

    return count
};