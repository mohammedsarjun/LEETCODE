/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let result=[num]
    num=String(num)
    num=num.split('')
    for(let i=0;i<num.length;i++){
        if(num[i]==6){
            let tempArr=[...num]
            tempArr[i]="9"
            tempArr=Number(tempArr.join(''))
            result.push(tempArr)
        }else{
             let tempArr=[...num]
            tempArr[i]="6"
           tempArr= Number(tempArr.join(''))
            result.push(tempArr)
        }
    }
     return Math.max(...result)
};