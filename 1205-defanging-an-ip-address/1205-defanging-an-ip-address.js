/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let resArr=[]
    for(let i=0;i<address.length;i++){
        if(address[i]=="."){
            resArr.push("[")
        resArr.push(address[i])
          resArr.push("]")
        }else{
           resArr.push(address[i]) 
        }

    }


    return resArr.join('')
};