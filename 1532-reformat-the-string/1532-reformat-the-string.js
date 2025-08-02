/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    s=s.split('')
    let num=s.filter((num)=>num>-Infinity)
    let str=s.filter((str)=>!num.includes(str))
    let diff=Math.abs(num.length-str.length)
    if(diff>1) return ""

    let result=[]

 while(true){
        result.push(num.shift())
        result.push(str.shift())
        if(!str.length || !num.length) break
    }

    if(str.length) result.unshift(str.shift())
    if(num.length) result.push(num.shift())
  return result.join('')
};