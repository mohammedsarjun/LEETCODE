/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (n, w, maxWeight) {
    let cell = n * n
    let resCount = 0


    while (maxWeight >= w && cell > 0) {

        resCount++
        maxWeight -= w
        cell--

    }

    return resCount
};