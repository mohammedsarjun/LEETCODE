/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    let count = 0
    let breakIndex = -1
    let isTrailZeroAvailable = num[num.length - 1]

    if (isTrailZeroAvailable != 0) return num
    num=num.split('')
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] != 0) {
            break
        }
        num.pop()

    }

    return num.join('')
};