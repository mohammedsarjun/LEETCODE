/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
let count=0
    for(let i=0;i<word.length;i++){
        
        let vowels=new Set()
        for(let j=i;word.length;j++){
        
            if(!isVowel(word[j])) break  

            vowels.add(word[j])

            console.log(vowels.size)
            if(vowels.size==5) count++
        }
    }
   return count
};


function isVowel(word){

    return 'aeiou'.includes(word)
}