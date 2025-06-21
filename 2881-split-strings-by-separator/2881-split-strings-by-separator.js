/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    let result = []

    for (let i = 0; i < words.length; i++) {
        let tempStr = ""
        for (let j = 0; j < words[i].length; j++) {

            if (words[i][j] != separator) {
                tempStr += words[i][j]
            } else {
                if (tempStr != "") {
                    result.push(tempStr)
                }

                tempStr = ""
            }
        }
          if (tempStr != "") {
                    result.push(tempStr)
                }

    }

    return result
};