/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!=t.length) return false
    let obj={}

    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]]=0
        }

        obj[s[i]]++
   
    }


    for(let i=0;i<t.length;i++){
        if(!obj[t[i]]){
            return false
        }

        obj[t[i]]--
    }


    return true
};