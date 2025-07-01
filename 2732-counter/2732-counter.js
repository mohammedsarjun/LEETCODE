/**
 * @param {number} n
 * @return {Function} counter
 */

 let arr=[]

var createCounter = function(n) {
     let calledCount=0
    return function() {

        if(calledCount==0){
             calledCount+=1
            
            return n
        }
        let output= n+calledCount
         calledCount+=1
        return output
       
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */