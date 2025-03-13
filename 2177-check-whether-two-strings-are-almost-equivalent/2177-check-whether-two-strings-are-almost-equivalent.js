/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let mySet=new Set(word1)
    let my2Set=new Set(word2)
    let checkArr=[...mySet,...my2Set]
    console.log(checkArr)
    for(let i=0;i<checkArr.length;i++){
        let arr1Check=word1.split('').filter((word)=>word==checkArr[i]).length
        let arr2Check=word2.split('').filter((word)=>word==checkArr[i]).length

        if(arr1Check<arr2Check){
            let temp=arr2Check
            arr2Check=arr1Check
            arr1Check=temp
        }
        let resVal=arr1Check-arr2Check
      
        if(resVal>3){
            
              console.log(arr1Check,arr2Check)
            return false
        }
    }
    return true
};