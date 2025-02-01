/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    const deepArr = JSON.parse(JSON.stringify(arr))
    let resArr = []

    let result = 0
    let c = 0
    for (let i = 0; true; i++) {
        if (i % 2 != 0) {
            for (let j = 0; j < arr.length; j++) {
                resArr = arr.splice(j, i)
                if (resArr.length == i) {
                    result = result + resArr.reduce((acc, curr) => acc + curr, 0)
                }

                arr = structuredClone(deepArr)
            }



        }

        resArr = []
        c++
        if (c > 100) {
            break
        }
    }
    return result
};