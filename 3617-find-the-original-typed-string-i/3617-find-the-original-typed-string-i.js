/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
  let count=0
   for(let i=0;i<word.length;i++){
    if(word[i-1]==word[i]) count++
      }
      return count+1

};