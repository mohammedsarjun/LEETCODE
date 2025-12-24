/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count=0

    for(let i=1;i<=num;i++){
        count=String(i).split('').map((num)=>Number(num)).reduce((acc,curr)=>acc+curr,0)%2==0?count+1:count
    }

    return count
};