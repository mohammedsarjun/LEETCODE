/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let word1Set=new Set(words1)
    word1Set=[...word1Set]
    
    let wordObj={}

    for(let i=0;i<word1Set.length;i++){
        if(words2.includes(word1Set[i])){
            wordObj[word1Set[i]]=[0,0]
        }
    }

    let objectKeys=Object.keys(wordObj)

    for(let i=0;i<objectKeys.length;i++){

        for(let j=0;j<words1.length;j++){
            if(objectKeys[i]==words1[j]){
                wordObj[objectKeys[i]][0]=wordObj[objectKeys[i]][0]+1
            }
        }
    }

     for(let i=0;i<objectKeys.length;i++){

        for(let j=0;j<words2.length;j++){
            if(objectKeys[i]==words2[j]){
                wordObj[objectKeys[i]][1]=wordObj[objectKeys[i]][1]+1
            }
        }
    }
    let count=0

    for(let i=0;i<objectKeys.length;i++){

        
                wordObj[objectKeys[i]].reduce((acc,curr)=>acc+curr,0)==2?count++:count
           
    }
    return count

    
};