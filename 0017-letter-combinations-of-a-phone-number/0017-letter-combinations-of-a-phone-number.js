/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let words=["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let result=[]
    backTrack("",digits,words,result)

    function backTrack(combination,digits,words,result){
        if(!digits.length){
            result.push(combination)
        }else{
            let letters=words[digits[0]-2]

            for(let letter of letters){
                backTrack(combination+letter,digits.slice(1),words,result)
            }
        }
    }


    return result

};