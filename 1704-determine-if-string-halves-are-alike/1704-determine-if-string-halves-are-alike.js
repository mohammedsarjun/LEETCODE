/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let n = Math.floor(s.length / 2)
    let count1=0
    let count2=0

    for (let i = 0; i < n; i++) {
        if (s[i].toLowerCase() == "a" || s[i].toLowerCase() == "e" || s[i].toLowerCase() == "i" || s[i].toLowerCase() == "o" || s[i].toLowerCase() == "u") {
            count1++
        }
    }

    for(let i=n;i<s.length;i++){
       if (s[i].toLowerCase() == "a" || s[i].toLowerCase() == "e" || s[i].toLowerCase() == "i" || s[i].toLowerCase() == "o" || s[i].toLowerCase() == "u") {
            count2++
        }
    }

    return count1==count2
};