/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let resultArr = []
    let str = ""
    sentence=sentence.split(' ')

    for (let i = 0; i < sentence.length; i++) {
        let tempStr = ""

            if (sentence[i][0].toLowerCase() == "a" || sentence[i][0].toLowerCase() == "e" || sentence[i][0].toLowerCase() == "i" || sentence[i][0].toLowerCase() == "o" || sentence[i][0].toLowerCase() == "u") {
                tempStr=sentence[i]+"ma"
            }else{
                tempStr=sentence[i]
                tempStr=tempStr.split('')
                tempWord=tempStr.shift()
                tempStr.push(tempWord)
                tempStr=tempStr.join('')
                tempStr+="ma"

            }

            tempStr+=getA(i+1)

        resultArr.push(tempStr)
    }

    return resultArr.join(' ')
};

function getA(count){
    let str=""

    for(let i=0;i<count;i++){
        str+="a"
    }

    return str
}