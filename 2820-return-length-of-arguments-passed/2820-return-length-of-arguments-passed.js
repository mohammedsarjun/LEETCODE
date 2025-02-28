/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count=0
    let i=0
    while(true){
        
        if(args[i]===undefined){
            break
        }
        count++
        i++
    }
   return count
};

/**
 * argumentsLength(1, 2, 3); // 3
 */