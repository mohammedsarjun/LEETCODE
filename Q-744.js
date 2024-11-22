var nextGreatestLetter = function(letters, target) {
    let result;
    let min=true
    letters.sort()
    for(let i=letters.length-1;i>=0;i--){
        if(letters[i]>target){
            result=letters[i]
            min=false
        }
        if(i==0&&min){
            result=letters[0]
        }
    }
    return result
};

console.log(nextGreatestLetter(["c","f","j"],"a"))

