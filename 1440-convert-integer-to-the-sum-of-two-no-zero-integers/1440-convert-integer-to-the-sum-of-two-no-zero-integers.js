/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {

let a=--n
let b=1

while(isZeroContain(a)||isZeroContain(b)){
    a--
    b++
}

return [a,b]
};


function isZeroContain(num){
    num=String(num)
    return num.includes("0")
}
function isInteger(num){
    num=String(num)
    return !num.includes(".")
}