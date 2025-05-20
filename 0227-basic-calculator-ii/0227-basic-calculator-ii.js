/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
let stack=[]
let num=0
let sign="+"
s = s.replace(/\s+/g, '');

for(let i=0;i<s.length;i++){
let char=s[i]

if(!isNaN(char)){
    num=num*10+parseInt(char)
}

if(isNaN(char) || i==s.length-1){
if (char === ' ' && i !== s.length - 1) continue;
    if(sign=="+"){
        stack.push(num)
    }else if(sign=="-"){
        stack.push(-num)
    }else if(sign=="*"){
        stack.push(stack.pop()*num)
    }else if(sign=="/"){
        stack.push(Math.trunc(stack.pop()/num))
    }
    

    sign=char
    num=0
    }


}

return stack.reduce((acc,curr)=>acc+curr)
};
