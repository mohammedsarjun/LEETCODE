/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {

    nums = nums.reverse()
    let count = 0
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= k) {
            if (!obj[nums[i]]) {
                count++
                obj[nums[i]]=1
            }


        }
        if (count == k) return i + 1
    }

};