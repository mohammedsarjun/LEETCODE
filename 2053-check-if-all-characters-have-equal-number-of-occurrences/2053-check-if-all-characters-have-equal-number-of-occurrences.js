/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let mySet=new Set(s)
    mySet=[...mySet]
    let resCount=0
      let resArr=[]
for(let i=0;i<mySet.length;i++){
    let temp=0
      for(let j=0;j<s.length;j++){
        if(s[j]==mySet[i]){
            temp++
        }
      }

      if(i==0){
        resCount=temp
        continue
      }

      if(resCount==temp){
        resCount=temp
      }else{
        return false
      }

}

return true
  
   
};