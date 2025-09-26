/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let result = 0

    n = String(n)
    n=n.split('').map((num)=>Number(num))

    console.log(n)

    for (let i = 0; i < n.length; i++) {
        if (i % 2 == 0) {
            result += n[i]
        }else{
            result -=n[i]
        }

    }
    console.log(result)

    return result
};