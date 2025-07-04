/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count=0
     let tempStr=""
    for(let i=0;i<s.length;i++){
        if(s[i]==" "&&tempStr){
            tempStr=""
            count++
            continue
        }

        if(s[i]==" "){
            continue
        }
       
        tempStr+=s[i]
        

    }
    if(tempStr){
        count++
    }

   
    return count
};