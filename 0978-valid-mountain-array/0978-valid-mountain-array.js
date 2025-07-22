/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {



    let max = Math.max(...arr)

    let foundMax = false
    for (let i = 0; i < arr.length; i++) {
        if (!foundMax) {


            if (arr[i] == max && i != arr.length - 1 && i != 0) {
                foundMax = true

            }
            if (arr[i] > max || arr[i - 1] >= arr[i]) {
                return false
            }
        } else {

            if (arr[i] > max || arr[i - 1] <= arr[i]) {
                return false
            }
        }
    }

    if (foundMax) {
        return true
    } else {
        return false
    }


};