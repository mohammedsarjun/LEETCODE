/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for(let  i=0;true;i++){
        if(Math.pow(3,i)==n){
            return true
        }
        else if(Math.pow(3,i)>n){
            return false
        }
    }
};

console.log(isPowerOfThree(27))