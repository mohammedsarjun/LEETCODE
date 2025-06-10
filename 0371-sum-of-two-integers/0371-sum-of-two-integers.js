/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let count=0

    if(a<0){
       for(let i=a;0>i;i++) count-- 
    }else{
        for(let i=0;i<a;i++) count++
    }
    
    if(b<0){
        for(let i=b;0>i;i++) count--
    }else{
        for(let i=0;i<b;i++) count++
    }
    
    return count
};