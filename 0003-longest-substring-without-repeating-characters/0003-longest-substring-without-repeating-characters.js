/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxSubString = 0
    let l = 0
    let hashTable = {}

    for (let r = 0; r < s.length; r++) {

        while (hashTable[s[r]]) {
            delete hashTable[s[l]]
            l++
        }

        hashTable[s[r]] = 1
        maxSubString = Math.max(maxSubString, r-l+1)
    }

    return maxSubString
};