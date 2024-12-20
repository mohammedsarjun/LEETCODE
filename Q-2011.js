/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result=0
for(let i=0;i<operations.length;i++){
    for(let j=0;j<operations[i].length;j++){
        if(operations[i][j]=="-"){
            result=result-1
            break
        }
        else if(operations[i][j]=="+"){
            
            result=result+1
            break
        }
    }
}
return result
};
console.log(finalValueAfterOperations(["++X","++X","X++"]))