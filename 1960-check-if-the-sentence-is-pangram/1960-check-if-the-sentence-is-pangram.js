/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const mySet=new Set(sentence.split(''))

    return mySet.size==26
};