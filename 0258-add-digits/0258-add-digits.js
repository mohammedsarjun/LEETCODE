/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(String(num).length<2) return num
    let strNum=String(num).split('').map((num)=>Number(num)).reduce((acc,curr)=>acc+curr)
    return addDigits(strNum)
    
};