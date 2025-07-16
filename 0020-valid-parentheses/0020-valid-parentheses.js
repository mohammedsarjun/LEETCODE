/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]
    if(s.length==1) return false
    for(let i=0;i<s.length;i++){
   if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
    stack.push(s[i])
    }else if(s[i]===")"){
    let symbol=stack.pop()
    if(symbol!="(") return false
    }else if(s[i]==="]"){
    let symbol=stack.pop()
    if(symbol!="[") return false
    }else if(s[i]==="}"){
    let symbol=stack.pop()
    if(symbol!="{") return false
    }
    }
    if(stack.length==0){
 return true
    }else{
        return false
    }
   
};