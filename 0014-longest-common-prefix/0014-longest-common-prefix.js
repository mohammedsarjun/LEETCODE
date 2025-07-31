/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str=strs[0].split('')
    if(strs.length==1) return str.join('')

    for(let i=1;i<strs.length;i++){
        let n=strs[i].length<str.length?str.length:strs[i].length
       
        for(let j=0;j<n;j++){
            if(strs[i][j]!=str[j]){
                str=str.slice(0,j)
                break
            }
        }
    }
    if(str){
        return str.join('')
    }else{
        return ""
    }
};