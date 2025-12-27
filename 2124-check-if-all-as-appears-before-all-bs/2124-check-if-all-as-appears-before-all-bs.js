/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let isBfound=false

    for(let i=0;i<s.length;i++){
        if(s[i]=="b") isBfound=true

        if(s[i]=="a" && isBfound) return false
    }

    return true
};