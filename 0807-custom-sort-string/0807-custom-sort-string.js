/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let arr=[]
    s=s.split('')
    for(let i=0;i<order.length;i++){
        for(let j=0;j<s.length;j++){
            if(order[i]==s[j]){
                arr.push(s[j])
                s.splice(j,1)
            }
        }
        
            if(s.includes(order[i])){
                i--
            }
    }
    arr=[...arr,...s]
    return arr.join('')
};