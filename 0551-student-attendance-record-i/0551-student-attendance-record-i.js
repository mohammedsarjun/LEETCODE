/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    
    let obj = {}
    let con = false
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 0
        }

        obj[s[i]]++

        if (s[i] == "A") {
            if (obj[s[i]] >= 2) {
                return false
            }
        }

        if (s[i] == "L") {
            if (obj[s[i]] > 2) {
                con = true
            }
        }

    }

    if (con) {
        s=s.split('')
        while(s.filter((str)=>str=="L").length){
            let index=s.indexOf("L")

            for(let i=index;i<index+3;i++){
                if(s[i]!="L"){
                    s.splice(index,Math.abs(i-index))
                    break
                }
                if(i==(index+3)-1){
                    return false
                }
            }
        }

        return true
    
    }

    return true
};