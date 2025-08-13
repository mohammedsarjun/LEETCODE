/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    let obj = {}
    for (let i = 0; i < num.length; i++) {

        if (!obj[i]) {
            obj[i] = 0

        }

    }

    for (let i = 0; i < num.length; i++) {
        obj[num[i]]++
    }


    console.log(obj)
    for (let i = 0; i < num.length; i++) {
        if (num[i] != obj[i]) return false
    }


    return true
};