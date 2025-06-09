/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0
for(let i=0;i<words.length;i++){
    let notAllowed=false
    for(let j=0;j<words[i].length;j++){
        console.log(words[i][j],!allowed.includes(words[i][j]))
        if(!allowed.includes(words[i][j])){
            notAllowed=true
            break
        }
    }
    if(!notAllowed){
 count++
    }
   
}
return count
};