/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result=0
    let acResult=0;
    for(let i=0;i<s.length;i++){
        if(s[i]!=" "){
            result++
        }
        else{
            result=0
            continue;
        }
        acResult=result
    }
    return acResult
};

console.log(lengthOfLastWord("Hello World"))