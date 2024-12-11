
var mostWordsFound = function(sentences) {
    let maxWord=0
    let temp=0
    for(let i=0;i<sentences.length;i++){
        for(let j=0;j<sentences[i].length;j++){
            if(sentences[i][j]==" "){
                temp=temp+1
             
            }
        }
        if(maxWord<temp){
            maxWord=temp
        }
        temp=0
    }
    return maxWord+1
};

console.log(mostWordsFound(["please wait","continue to fight","continue to win"]))