/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let word1Arr = word1.split('')
    let word2Arr = word2.split('')
    let length = word1Arr+word2Arr
    for (let i = 0; i < word1Arr.length; i++) {
        if (i % 2 != 0) {
            word1Arr.splice(i, 0, undefined)
        }
    }

    for (let i = 0; true; i++) {
        if(word1Arr[i]===undefined){
            word1Arr[i]=word2Arr[0]
            word2Arr.splice(0,1)
        }
        if(word2Arr.length==0){
            break
        }
    }

    return word1Arr.join("")
};