/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
      let resPattern=pattern
   let resS=s.split(' ')
   let result=[]
    let patternSet=new Set(pattern.split(''))
    let sSet=new Set(s.split(' '))
    s=[...sSet]
    pattern=[...patternSet]
    let myMap=new Map()
    if(resPattern.length!=resS.length){
        return false
    }
    for(let i=0;i<pattern.length;i++){
        myMap.set(pattern[i],s[i])
    }
  
  for(let i=0;i< resS.length;i++){
      if(myMap.get(resPattern[i])==resS[i]){
          result.push(resPattern[i])
          console.log("hi")
      }
  }
  if(resPattern==result.join('')){
      return true
  }
  else{
      return false
  }
};