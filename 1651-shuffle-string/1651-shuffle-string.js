/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    s=s.split('')
    let newArr=[]

    for(let i=0;i<indices.length;i++){
        for(let j=0;j<indices.length;j++){
            if(i==indices[j]){
                newArr.push(s[j])
            }
        }
    }
    return newArr.join("")
};